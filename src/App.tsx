import {useDebounce} from '../src/useDebounce';
import { useForm, SubmitHandler  } from 'react-hook-form';
import './App.css';

// interface FormData {
//   personal: string;
//   ktpStatus: string;
//   ktpPower: string;
//   ktpEfficiency: string;
//   comment: string;
// }

const DynamicTable = () => {
  // console.log('aaaaaa');
  // const { register, handleSubmit } = useForm<FormData>({
  //   defaultValues: {
  //     personal: '100500 человек',
  //     ktpStatus: 'Функционирует, но не бьет',
  //     ktpPower: '240',
  //     ktpEfficiency: '98.4', 
  //     comment: 'Комментарий из 3 строчек'
  //   }
  // });
  
  // const debouncedSaveData = useDebounce((data: FormData) => {
  //   console.log('Сохранение данных:', data);
  // }, 5000);

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   debouncedSaveData(data);
  // };


  return (
    <div>
      <table style={{ fontSize: '20px', fontWeight: 'bold', borderCollapse: 'collapse' }}>
  <thead>
    <tr style={{height: 100  }}>
      <th scope="col" style={{ textAlign: 'center', width: 294  }}>30 января 2024</th>
      <th scope="col" style={{ textAlign: 'center', width: 200  }}>Смена 2</th>
      <th scope="col" style={{ textAlign: 'center', width: 811  }}>Мастер: Иванов И.И.</th>
      <th scope="col" style={{ textAlign: 'center', width: 294  }}>РПТКМ-120</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{height: 100  }}>
      <th scope="row" style={{ textAlign: 'center', width: 294  }}>Персонал</th>
      <td colSpan={2}>
        <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <input defaultValue="100500 человек" type="text" style={{ textAlign: 'center', width: '30'  }} />
        </div>
        
      </td>
      <td rowSpan={3} style={{ textAlign: 'center', width: 294  }}>
        <textarea defaultValue="Комментарий из 3 строчек" rows={3} style={{resize: 'none',overflowY: 'hidden',width: '70%'}}/>
      </td>
      
    </tr>
    <tr style={{height: 100  }}>
      <th scope="row" rowSpan={2} style={{ textAlign: 'center', width: 294  }}>КТП 2000 321</th>
      <td >
      <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          Работает
          </div>
      </td>
      <td>
      <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input defaultValue="240" type="number" style={{ textAlign: 'center', width: '30' }} />
      </div>
        
      </td>
    </tr>
    <tr style={{height: 100  }}>
      <td>
      <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <input defaultValue="98.4" type="number" min={0} max = {100} style={{ textAlign: 'center', width: '30' }} />%
        </div>
      </td>
      <td>
      <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <input defaultValue="Функционирует, но не бьет" type="text" style={{ textAlign: 'center', width: '30' , color: 'red'}} />
      </div>
      </td>
    </tr>
  </tbody>
</table>

    </div>
  );
}
export default DynamicTable;