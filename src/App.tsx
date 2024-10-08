// import {useDebounce} from '../src/useDebounce';
import './App.css';
import { Container } from './components/Container';
import { TableCell } from './components/TableCell';
import { TableCellTextarea } from './components/TableCellTextarea';
import { TableHeader } from './components/TableHeader';
import { REG_EXP } from './constants/RegExp';
import { useTable } from './hooks/useTable';

function DynamicTable() {
  const {
    dataTable,
  } = useTable();
  // const debouncedSaveData = useDebounce((data: FormData) => {
  //   console.log('Сохранение данных:', data);
  // }, 5000);

  return (
    <Container>
      <table className="table-container">
        <TableHeader />
        <tbody>
          <tr className="table-tr">
            <TableCell
              value={dataTable.personnel}
              setValue={() => {}}
              regExp={REG_EXP.string}
            />
            <TableCell
              value={dataTable.totalPersonnel}
              setValue={() => {}}
              regExp={REG_EXP.numberAndString}
              colSpan={2}
              isCenter
            />
            <TableCellTextarea
              value={dataTable.comment}
              setValue={() => {}}
              regExp={REG_EXP.string}
              rowSpan={3}
            />
          </tr>

          <tr className="table-tr">
            <TableCell
              value={dataTable.ktp}
              setValue={() => {}}
              regExp={REG_EXP.numberAndString}
              rowSpan={2}
            />
            <TableCell
              value={dataTable.workStatus}
              setValue={() => {}}
              regExp={REG_EXP.string}
            />
            <TableCell
              value={dataTable.workingPersonnel}
              setValue={() => {}}
              regExp={REG_EXP.number}
            />
          </tr>

          <tr className="table-tr">
            <TableCell
              value={dataTable.percentage}
              setValue={() => {}}
              regExp={REG_EXP.numberAndDot}
            />
            <TableCell
              value={dataTable.functionalityStatus}
              setValue={() => {}}
              regExp={REG_EXP.all}
              isRed
            />
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
export default DynamicTable;