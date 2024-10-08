import './TableHeader.css';

export function TableHeader() {
  return (
    <thead>
      <tr className="table-header-container">
        <th scope="col" className="table-header-th table-header-1">
          30 января 2024
        </th>
        <th scope="col" className="table-header-th table-header-2">
          Смена 2
        </th>
        <th scope="col" className="table-header-th table-header-3">
          Мастер: Иванов И.И.
        </th>
        <th scope="col" className="table-header-th table-header-4">
          РПТКМ-120
        </th>
      </tr>
    </thead>
  )
}