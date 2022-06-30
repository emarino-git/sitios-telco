import { Autocomplete, Button, TextField } from '@mui/material';
import { sitiosData, sharepoint, servidorVpn } from '../data/Sitios'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LanIcon from '@mui/icons-material/Lan';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useState } from 'react';
import './Sitios.css'

export default function Sitios() {

    // Listado de sitios para búsqueda

    let listadoSitios = [];

    listadoSitios = sitiosData.map(function (elem) {
        let returnTipoNombre = { label: elem.Tipo + " " + elem.Nombre, result: elem.Nombre }
        return returnTipoNombre;
    });

    listadoSitios.sort()

    // Resultado de busqueda

    var result = ""

    const [sitio, setSitio] = useState(listadoSitios[0])

    result = sitio.result

    // Busqueda de Key de Sitio

    const iterator = sitiosData.keys();
    var key = '0'

    for (const keyFind of iterator) {
        if (sitiosData[keyFind]['Nombre'] === result) {
            key = keyFind
        }
    }

    console.log(key)

    // Link a GOOGLE (mover a components)
    function GoogleLink(props) {
        const existeCoordenada = props.existeCoordenada;
        if (existeCoordenada) {
            return (
                <Button
                    variant="outlined"
                    startIcon={<AddLocationAltIcon />}
                    href={`https://www.google.com.ar/maps/dir//${sitiosData[key].Latitud},${sitiosData[key].Longitud}/@${sitiosData[key].Latitud},${sitiosData[key].Longitud},17z`}
                    target="_blank"
                >
                    Cómo llegar
                </Button>
            );
        }
        return <p>Sin coordanada</p>;
    }

    // Link a Plano eléctrico  
    function PlanoRedElectricaLink(props) {
        const existePlanoRedElec = props.existePlanoRedElec;
        if (existePlanoRedElec) {
            return (
                <Button
                    className='link-button'
                    variant="outlined"
                    startIcon={<ElectricBoltIcon />}
                    href={sharepoint.RedElectricaSUF + sitiosData[key].PlanoREDELEC}
                    target="_blank"
                >
                    Plano de ALIMENTACION
                </Button>
            );
        }
        return <></>;
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
                sx={{ width: "90vw" }}
                renderInput={(params) => <TextField {...params} label="Sitio" />}
                disableClearable
            />

            <h3>{sitio.label}</h3>

            Localidad: {sitiosData[key].Localidad}
            <br></br>
            Partido: {sitiosData[key].Partido}
            <br></br>
            Región {sitiosData[key].Región}
            <br /><br />
            <GoogleLink className="boton-link" existeCoordenada={(sitiosData[key].Latitud !== "")} />
            <div className='link-planos' >
                <div className='boton-link'>
                    <PlanoRedElectricaLink existePlanoRedElec={(sitiosData[key].PlanoREDELEC !== "")} />
                </div>
                <div className='boton-link'>
                    <Button
                        className='link-button'
                        variant="outlined"
                        startIcon={<LanIcon />}
                        href={sharepoint.RedLAN + sitiosData[key].PlanoREDLAN}
                        target="_blank"
                    >
                        Plano de RED
                    </Button>
                </div>
            </div>

            <h3>Archivos por VPN</h3>
            <Button
                variant="outlined"
                startIcon={<LanIcon />}
                href={servidorVpn}
            // target="_blank"
            >
                Plano de Planta
            </Button>
        </div>
    )
}