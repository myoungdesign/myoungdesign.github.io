import { cn } from '@/utils';

export type ResultsTableRow = {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

type ResultsTableProps = {
  columns: [string, string];
  rows: ResultsTableRow[];
  className?: string;
};

function TableHeader({ columns }: { columns: [string, string] }) {
  return (
    <thead>
      <tr>
        <th
          scope="col"
          className="w-44 md:w-1/3 pl-1 pr-3 py-2 align-middle font-sans text-lg font-medium text-fg-emphasis"
        >
          {columns[0]}
        </th>
        <th
          scope="col"
          className="px-3 py-2 align-middle font-sans text-lg font-medium text-fg-emphasis"
        >
          {columns[1]}
        </th>
      </tr>
    </thead>
  );
}

function TableRow({ icon, label, value }: ResultsTableRow) {
  return (
    <tr className="border-t border-subtle">
      <td className="w-44 md:w-1/3 align-middle">
        <div className="flex min-h-16 py-3 pr-3 items-center gap-4">
          {icon && <span className="shrink-0 size-9 text-fg [&_svg]:size-8">{icon}</span>}
          <span className="font-serif text-xl tracking-tight leading-9 text-fg">{label}</span>
        </div>
      </td>
      <td className="align-middle">
        <div className="flex min-h-24 py-3 px-4 items-center font-sans text-lg leading-7 text-fg">
          {value}
        </div>
      </td>
    </tr>
  );
}

export function ResultsTable({ columns, rows, className }: ResultsTableProps) {
  return (
    <table className={cn('w-full table-fixed border-collapse text-left', className)}>
      <TableHeader columns={columns} />
      <tbody>
        {rows.map(row => (
          <TableRow key={row.label} icon={row.icon} label={row.label} value={row.value} />
        ))}
      </tbody>
    </table>
  );
}
