import { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { Box, Grid } from '@mui/material';

type Props = {
  title: string,
  overview: string,
  imageURL: string,
}

export const MovieCard = ({ title, overview, imageURL }: Props): JSX.Element => {

  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  return (
    <Box sx={{ height: 260 }} >
      <Card sx={{ maxWidth: 400, cursor: 'pointer', width: isMouseHover ? 500 : '100%' }}
        elevation={isMouseHover ? 8 : 4}
        onMouseEnter={() => setIsMouseHover(true)}
        onMouseLeave={() => setIsMouseHover(false)}
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