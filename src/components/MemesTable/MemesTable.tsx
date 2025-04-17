import {
  Table,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import { TableBody } from '@react-stately/table';
import { Button } from '@heroui/button';
import { IMemesTable } from ' @/types/types';

export default function MemesTable({ memes, openEditModal }: IMemesTable) {
  return (
    <Table aria-label="Memes" className="mt-10">
      <TableHeader>
        <TableColumn>Id</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Likes</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {memes.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="text-white">{item.id}</TableCell>
            <TableCell className="text-white">{item.name}</TableCell>
            <TableCell className="text-white">{item.likes}</TableCell>
            <TableCell className="text-white">
              <Button
                color="primary"
                variant="light"
                onPress={() => openEditModal(item)}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
