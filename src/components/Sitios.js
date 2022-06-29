import { Autocomplete, Button, TextField } from '@mui/material';
import { sitiosData, sharepoint } from '../data/Sitios'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LanIcon from '@mui/icons-material/Lan';
import { useRef, useState } from 'react';
import './Sitios.css'

export default function Sitios() {

    const listadoSitios = [
        { label: '', year: 0 },
        { label: 'El Cazador', year: 1994 },
        { label: 'El Cruce', year: 1972 },
    ]

    // Resultado de busqueda

    var result = ""

    const [sitio, setSitio] = useState(listadoSitios[0])

    result = sitio.label    

    // Busqueda de Key de Sitio

    const iterator = sitiosData.keys();
    var key = '0'

    for (const keyFind of iterator) {
        if (sitiosData[keyFind]['Nombre'] === result) {
            key = keyFind
        }
    }

    return (
        <div className='sitios-page'>
            <h1>Busqueda de documetación por Sitio</h1>

            <Autocomplete className='search'
                disablePortal
                id="busqueda-sitio"
                options={listadoSitios}
                onChange={(event, newValue) => {
                    setSitio(newValue);
                  }}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Sitio" />}
                disableClearable
            />

            <h3>{sitiosData[key].Nombre}</h3>

            Localidad: {sitiosData[key].Localidad}
            <br></br>
            Partido: {sitiosData[key].Partido}
            <br></br>
            Región {sitiosData[key].Región}
            <br /><br />
            <Button
                variant="outlined"
                startIcon={<AddLocationAltIcon />}
                href={`https://www.google.com.ar/maps/dir//${sitiosData[key].Coordenadas[0]},${sitiosData[key].Coordenadas[1]}/@${sitiosData[key].Coordenadas[0]},${sitiosData[key].Coordenadas[1]},17z`}
                target="_blank"
            >
                Cómo llegar
            </Button>
            <br /><br />
            <Button
                variant="outlined"
                startIcon={<LanIcon />}
                href={sharepoint + sitiosData[key].PlanoREDLAN}
                target="_blank"
            >
                Plano de RED
            </Button>
        </div>
    )
}