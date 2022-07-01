import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { sharepoint, sitiosData } from '../data/Sitios';

export default function MasonryImageList(props) {
    let sitioKey = props.sitioKey

    console.log(sitioKey)

    const sp = sharepoint.Fotos
    const sitio = sitiosData[sitioKey]

    const raiz = sp+sitio.Tipo+"_"+sitio.Nombre+"/"

    console.log(raiz)

  return (
    <Box sx={{ width: "90vh", height: "80wv", overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
          <ImageListItem>
            <img
              src={`${raiz}P1_RACK-01_01.JPG?w=248&fit=crop&auto=format`}
              srcSet={`${raiz}P1_RACK-01_01.JPG?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={sitio.Tipo+"_"+sitio.Nombre}
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
    </Box>
  );
}
