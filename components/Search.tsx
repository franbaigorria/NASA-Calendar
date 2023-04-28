import { useState } from 'react';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  onSubmit: (string: string) => void
}

export default function Search({ onSubmit }: Props): JSX.Element {

  const [searchString, setSearchString] = useState<string>('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchString(event.target.value);
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginBottom: 5 }}
    >
      <InputBase
        value={searchString}
        onChange={handleSearchChange}
        onKeyDown={(e) => e.code === 'Enter' && onSubmit(searchString)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Movie"
        inputProps={{ 'aria-label': 'search movie' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => onSubmit(searchString)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}