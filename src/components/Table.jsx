import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, status) {
  return { name, calories, fat, carbs, status };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, "approved"),
  createData("Ice cream sandwich", 237, 9.0, 37, "pending"),
  createData("Eclair", 262, 16.0, 24, "completed"),
  createData("Cupcake", 305, 3.7, 67, "cancled"),
  createData("Gingerbread", 356, 16.0, 49, "pending"),
];

const getStatusColor = (status) => {
  switch (status) {
    case "approved":
      return "bg-green-500";
    case "pending":
      return "bg-yellow-500";
    case "completed":
      return "bg-blue-500";
    case "cancled":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default function BasicTable() {
  return (
    <div className="p-6 mt-10 text-white bg-gray-900 rounded-xl">
      <h3 className="text-lg font-semibold mb-4">
        Recent Orders
      </h3>

      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "#111827" }}
        className="shadow-2xl border-r-2"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "white" }}>
                Dessert
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                Calories
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                Fat
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                Carbs
              </TableCell>
              <TableCell sx={{ color: "white" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                hover
                sx={{ "&:hover": { backgroundColor: "#1f2937" } }}
              >
                <TableCell sx={{ color: "white" }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {row.calories}
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {row.fat}
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {row.carbs}
                </TableCell>

                {/* Status with dynamic color */}
                <TableCell>
                  <span
                    className={`text-white px-3 py-1 rounded-full text-sm ${getStatusColor(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
