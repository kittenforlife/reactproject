import './App.css';
import { Container } from './components/Container';
import { TableCell } from './components/TableCell';
import { TimerContainer } from './components/TimerContainer';
import { TableCellTextarea } from './components/TableCellTextarea';
import { TableHeader } from './components/TableHeader';
import { REG_EXP } from './constants/RegExp';
import { useTable } from './hooks/useTable';
import { getRemainingTimeSeconds } from './utils';
import { ProgressBar } from './components/ProgressBar';

function DynamicTable() {
  const {
    dataTable,
    setValue,
    remainingTime,
  } = useTable();

  return (
    <Container>
      <table className="table-container">
        <TableHeader />
        <tbody>
          <tr className="table-tr">
            <TableCell
              value={dataTable.personnel}
              setValue={setValue}
              regExp={REG_EXP.string}
              keyData="personnel"
            />
            <TableCell
              value={dataTable.totalPersonnel}
              setValue={setValue}
              regExp={REG_EXP.numberAndString}
              colSpan={4}
              isCenter
              keyData="totalPersonnel"
            />
            <TableCellTextarea
              value={dataTable.comment}
              setValue={setValue}
              regExp={REG_EXP.all}
              rowSpan={3}
              keyData="comment"
            />
          </tr>

          <tr className="table-tr">
            <TableCell
              value={dataTable.ktp}
              setValue={setValue}
              regExp={REG_EXP.numberAndString}
              rowSpan={2}
              keyData="ktp"
            />
            <TableCell
              value={dataTable.workStatus}
              setValue={setValue}
              regExp={REG_EXP.string}
              keyData="workStatus"
              colSpan={2}
            />
            <TableCell
              value={dataTable.workingPersonnel}
              setValue={setValue}
              regExp={REG_EXP.number}
              keyData="workingPersonnel"
            />
            <TableCell
              value={dataTable.spi}
              setValue={setValue}
              regExp={REG_EXP.numberAndString}
              keyData="spi"
            />
          </tr>

          <tr className="table-tr">
            <TableCell
              value={dataTable.percentage}
              setValue={setValue}
              regExp={REG_EXP.numberAndDot}
              keyData="percentage"
            />
            <TableCell
              value={dataTable.functionalityStatus}
              setValue={setValue}
              regExp={REG_EXP.all}
              keyData="functionalityStatus"
              colSpan={3}
              isRed
            />
          </tr>
        </tbody>
      </table>
      
      {/* todo Для проверки работы. Не забудь вынести в компонент */}
      <TimerContainer
        remainingTime = {remainingTime}
      />
      <ProgressBar
        remainingTime = {remainingTime}
      />
      {/* <div className="timer-container">
    {remainingTime !== null && (
      <div>До превращения в Скуфа осталось {getRemainingTimeSeconds(remainingTime)} секунд</div>
    )}
  </div> */}
    </Container>
  );
}
export default DynamicTable;