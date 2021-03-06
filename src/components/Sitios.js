import { Autocomplete, Button, TextField } from '@mui/material';
import { sitiosData, sharepoint } from '../data/Sitios'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LanIcon from '@mui/icons-material/Lan';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import GridOnIcon from '@mui/icons-material/GridOn';
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
                    href={sharepoint.RedElectricaPRE + sitiosData[key].PlanoREDELEC + sharepoint.RedElectricaSUF}
                    target="_blank"
                >
                    Diagrama de ALIMENTACION
                </Button>
            );
        }
        return <></>;
    }

    // Link a Plano RED LAN  
    function PlanoRedLan(props) {
        const existePlanoRedLan = props.existePlanoRedLan;
        if (existePlanoRedLan) {
            return (
                <Button
                    className='link-button'
                    variant="outlined"
                    startIcon={<LanIcon />}
                    href={sharepoint.RedLAN + sitiosData[key].PlanoREDLAN + sharepoint.RedElectricaSUF}
                    target="_blank"
                >
                    Diagrama de RED LAN
                </Button>
            );
        }
        return <></>;
    }

    // Link a Fotos

    function Fotos(props) {
        const existenFotos = props.existenFotos;
        if (existenFotos) {
            return (
                <Button
                    className='link-button'
                    variant="outlined"
                    startIcon={<PhotoLibraryIcon />}
                    href={sharepoint.Fotos + sitiosData[key].Tipo + "_" + sitiosData[key].Nombre}
                    target="_blank"
                >
                    Fotos
                </Button>
            );
        }
        return <></>;
    }

    // Planos en DWG
    function PlanosDWG(props) {
        const existenPlanosDWG = props.existenPlanosDWG;
        if (existenPlanosDWG) {
            return (
                <Button
                    className='link-button'
                    variant="outlined"
                    startIcon={<BackupTableIcon />}
                    href={sharepoint.PlanosDWG + sitiosData[key].Tipo + "_" + sitiosData[key].Nombre}
                    target="_blank"
                >
                    Planos
                </Button>
            );
        }
        return <></>;
    }

    // Borneras FO
    function BornerasFO(props) {
        const existenBornerasFO = props.existenBornerasFO;
        if (existenBornerasFO) {
            return (
                <Button
                    className='link-button'
                    variant="outlined"
                    startIcon={<GridOnIcon />}
                    href={sharepoint.BornerasFO + sitiosData[key].Tipo + "_" + sitiosData[key].Nombre + "_PATCHERAS-FO.xlsx"+ sharepoint.RedElectricaSUF }
                    target="_blank"
                >
                    Patcheras FO
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
            <div className="h-divider">
                <div className="shadow"></div>
            </div>
            <div className='link-planos' >
                <div className='boton-link'>
                    <PlanoRedElectricaLink existePlanoRedElec={(sitiosData[key].PlanoREDELEC !== "")} />
                </div>
                <div className='boton-link'>
                    <PlanoRedLan existePlanoRedLan={(sitiosData[key].PlanoREDLAN !== "")} />
                </div>
                <div className='boton-link'>
                    <PlanosDWG existenPlanosDWG={(sitiosData[key].PlanosDWG)} />
                </div>
                <div className='boton-link'>
                    <BornerasFO existenBornerasFO={(sitiosData[key].BornerasFO)} />
                </div>
            </div>
            <div className='boton-link'>
                <Fotos existenFotos={(sitiosData[key].Fotos)} />
            </div>

            <h4>Código de Sitio: {sitiosData[key].Nomenclatura}</h4>

            


        </div>
    )
}