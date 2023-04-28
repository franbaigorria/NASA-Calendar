import { useState } from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from '@mui/material';

type Props = {
  title: string,
  overview: string,
  imageURL: string,
  onClick: () => void,
}

export const MovieCard = ({ title, overview, imageURL, onClick }: Props): JSX.Element => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  return (
    <Box sx={{ height: 260 }} >
      <Card sx={{ maxWidth: 400, cursor: 'pointer', width: isMouseHover ? 500 : '100%' }}
        elevation={isMouseHover ? 8 : 4}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
        onClick={onClick}
      >
        {
          isMouseHover &&
          <Typography fontSize={20} fontFamily={'sans-serif'} padding={2} >{title}</Typography>
        }
        <CardMedia
          component="img"
          height="200"
          image={process.env.NEXT_PUBLIC_IMAGE_URL + imageURL}
          alt={title}
        />
        {isMouseHover &&
          <>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            </CardActions>
          </>
        }
      </Card>
    </Box>

  );
}