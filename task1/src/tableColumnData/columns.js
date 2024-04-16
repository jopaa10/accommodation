import { FavoriteButton } from "../components/common/favoriteButton";

/** @type import('@tanstack/react-table').ColumnDef<any> */
export const getColumns = (data) => {
  return [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "IMAGE",
      accessorKey: "thumb",
      cell: ({ row }) => (
        <img
          src={row.original.thumb}
          alt="Crypto"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      header: "NAME",
      accessorKey: "name",
    },
    {
      header: "SYMBOL",
      accessorKey: "symbol",
    },
    {
      header: "PRICE",
      accessorKey: "price_btc",
    },
    {
      header: "MARKET CAP RANK",
      accessorKey: "market_cap_rank",
    },
    {
      header: "FAVORITE",
      accessorKey: "favorite",
      cell: ({ row }) => <FavoriteButton row={row} data={data} />,
      enableSorting: false,
    },
  ];
};

export const getMobileColumns = (data) => {
  return [
    {
      header: "NAME",
      accessorKey: "name",
      cell: ({ row }) => (
        <div className="details">
          <p>{row.original.name}</p>
          <img src={row.original.thumb} alt="" />
        </div>
      ),
    },
    {
      header: "SYMBOL",
      accessorKey: "symbol",
    },
    {
      header: "PRICE",
      accessorKey: "price_btc",
    },
    {
      header: "MARKET RANK",
      accessorKey: "market_cap_rank",
    },
    {
      header: "FAVORITE",
      accessorKey: "favorite",
      cell: ({ row }) => <FavoriteButton row={row} data={data} />,
      enableSorting: false,
    },
  ];
};
