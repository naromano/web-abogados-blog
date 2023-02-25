import { Injectable} from '@angular/core';
import { Lawyer } from './interface.laywer';


@Injectable()
export class TeamService{

private lawyers: Lawyer[] = [
    {

      name: 'Carrazco Monica',
      description: 'Abogada egresada de la Facultad de Derecho y Ciencias Sociales de la Universidad de Buenos Aires. ',
      email: 'monicacarrazcoabogada@gmail.com',
      cellNumber: '2613688030'
    },
    {
      name: 'Agneni Rodolfo',
      description: 'Abogado egresado de la Facultad de Ciencias Jurídicas y Sociales de la Universidad de Mendoza. ',
      email: 'rodolfoagneniabogados@gmail.com',
      cellNumber: '2615570217'
    },
    {
      name: 'Gallardo Miriam',
      description: 'Abogada egresada de la Facultad de Derecho y Ciencias Sociales de la Universidad de Buenos Aires.',
      email: 'miriamg435@gmail.com',
      cellNumber: '2615742941'
    },
    {
      name: 'Vercelli Juan Cruz',
      description: 'Abogado egresado de la Facultad de Ciencias Jurídicas y Sociales de la Universidad de Mendoza. ',
      email: 'juancruzvercelli@gmail.com',
      cellNumber: '2613688032'
    },
    {
      name: 'Maradona Alejandra',
      description: 'Abogada egresada \n de la Facultad de Ciencias Jurídicas de la Universidad Católica de Salta.',
      email: 'alejandramaradona@hotmail.com',
      cellNumber: '2615960708'
    },
    {
      name: 'Ponce Leonardo',
      description: 'Corredor Público Inmobiliario y Martillero egresado de la faculta de Humanidades y Ciencias Económicas de la Universidad Católica Argentina.',
      email: 'ponceinmobiliarias@gmail.com',
      cellNumber: '2615436865'
    }
  ];

    constructor() {
        console.log('servicio listo para usarse');
    }

getLawyer(){
    return this.lawyers;
}

}

