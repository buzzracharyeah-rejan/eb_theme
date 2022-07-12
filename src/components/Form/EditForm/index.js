import React, { useContext, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { CustomButton, CustomFormControl, FileUploadButton } from './EditForm.styles';
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from '@mui/material';
import { ModalContext } from '../../../context/ModalContext';

const productCategory = [
  { label: `men's clothing`, value: 'men' },
  { label: `women's clothing`, value: 'women' },
  { label: `jwelery`, value: 'jwelery' },
  { label: `electronics`, value: 'electronics' },
];

const mapCategoryValues = (category) => {
  const ref = productCategory.map(({ label, value }) => ({ [label]: value }));
  const actualObj = ref.reduce((acc, curr) => ({ ...acc, ...curr }), {});

  console.log(actualObj);
  return actualObj[category];
};

const defaultData = {
  title: '',
  product: '',
  price: '',
  category: '',
  avatar: '',
  rating: ''
};

const EditForm = (props) => {
  const [data, setData] = useState(defaultData);
  const { handleModalClose } = useContext(ModalContext);

  useEffect(() => {
    const { title, price, description, category, image, rating } = props.payload;
    const catValue = mapCategoryValues(category);
    setData({ title, price, description, category: catValue, avatar: image, rating: rating.rate });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Typography component='h1' variant='h5'>
          Edit Form
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='title'
            label='Product Title'
            name='title'
            autoComplete='title'
            value={data.title}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='price'
            type='number'
            label='Product Price'
            id='price'
            value={data.price}
            onChange={handleChange}
            autoComplete='current-price'
          />

          <FormControl fullWidth margin='normal'>
            <InputLabel id='category'>Product Category</InputLabel>
            <Select
              labelId='category'
              id='category'
              name='category'
              label='Product Category'
              value={data.category}
              onChange={handleChange}
            >
              {productCategory.map((product) => (
                <MenuItem key={product.label} value={product.value}>
                  {product.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            margin='normal'
            required
            fullWidth
            id='rating'
            type='number'
            label='User Ratings'
            name='rating'
            value={data.rating}
            onChange={handleChange}
          />

          <TextareaAutosize
            aria-label='empty textarea'
            placeholder='Product Description'
            name='description'
            minRows={7}
            style={{
              width: 300,
              marginTop: '1rem',
              borderColor: '#eee',
              '& :hover': { borderColor: '#eee' },
            }}
            value={data.description}
            onChange={handleChange}
          />

          <CustomFormControl>
            <label style={{ margin: '1rem ' }}>Photo</label>
            <FileUploadButton variant='outlined' component='label' color='info'>
              Upload File
              <input
                type='file'
                name='avatar'
                accept='image/*'
                hidden={true}
                onChange={handleChange}
              />
            </FileUploadButton>
          </CustomFormControl>

          <Grid container spacing={4}>
            <Grid item xs={8}>
              <CustomButton
                endIcon={<EditIcon />}
                type='submit'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Edit
              </CustomButton>
            </Grid>

            <Grid item xs={4}>
              <CustomButton
                endIcon={<DeleteIcon />}
                type='button'
                variant='contained'
                color='error'
                sx={{ mt: 3, mb: 2 }}
                onClick={handleModalClose}
              >
                Cancel
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default EditForm;
