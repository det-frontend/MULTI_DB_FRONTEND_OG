
export const COLUMNS = [
    {
        Header: "Station Id",
        // Footer: "Station Id",
        accessor: "stationId.name",
       
    },
    {
        Header: "Date",
        // Footer: "Date",
        accessor: "dateOfDay",
    },
    {
        Header: "Fuel Type",
        // Footer: "Fuel Type",
        columns: [
            {
                Header: "001-Octane Ron(92)",
                // Footer: "Ninety-Two",
                columns: [
                    {
                        id: 'ninety_two_count',
                        Header: "Count",
                        // Footer: "Count",
                        accessor:"ninety-two.count"
                       
                    },
                    {
                        id: "ninety_two_liter",
                        Header: "Liter",
                        // Footer: "Liter",
                        accessor: "ninety-two.liter",
                          Cell: ({ value }) => {
                            const ok = value.toFixed(3);
                            return ok
                        }
                       
                    },
                    {
                        id: "ninety_two_price",
                        Header: "Price",
                        // Footer: "Price",
                        accessor: "ninety-two.price",
                        Cell: ({ value }) => {
                            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
                            return currency;
                        }

                    }
                ]
            },
             {
                Header: "002-Octane Ron(95)",
                // Footer: "Ninety-Five",
                columns: [
                    {
                        id: 'ninety_five_count',
                        Header: "Count",
                        // Footer: "Count",
                        accessor:"ninety-five.count"

                    },
                    {
                        id: "ninety_five_liter",
                        Header: "Liter",
                        // Footer: "Liter",
                        accessor: "ninety-five.liter",
                            Cell: ({ value }) => {
                            const ok = value.toFixed(3);
                            return ok
                        }

                    },
                    {
                        id: "ninety_five_price",
                        Header: "Price",
                        // Footer: "Price",
                        accessor: "ninety-five.price",
                          Cell: ({ value }) => {
                            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
                            return currency;
                        }


                    }
                ]
            },
               {
                Header: "004-Diesel",
                // Footer: "HSD",
                columns: [
                    {
                        id: 'HSD_count',
                        Header: "Count",
                        // Footer: "Count",
                        accessor:"HSD.count"

                    },
                    {
                        id: "HSD_liter",
                        Header: "Liter",
                        // Footer: "Liter",
                        accessor: "HSD.liter",
                          Cell: ({ value }) => {
                            const ok = value.toFixed(3);
                            return ok
                        }


                    },
                    {
                        id: "HSD_price",
                        Header: "Price",
                        // Footer: "Price",
                        accessor: "HSD.price",
                        Cell: ({ value }) => {
                            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
                            return currency;
                        }



                    }
                ]
            },
         {
                Header: "005-Premium Diesel",
                // Footer: "PHSD",
                columns: [
                    {
                        id: 'PHSD_count',
                        Header: "Count",
                        // Footer: "Count",
                        accessor:"PHSD.count"

                    },
                    {
                        id: "PHSD_liter",
                        Header: "Liter",
                        // Footer: "Liter",
                        accessor: "PHSD.liter",
                          Cell: ({ value }) => {
                            const ok = value.toFixed(3);
                            return ok
                        }


                    },
                    {
                            id: "PHSD_price",
                            Header: "Price",
                            // Footer: "Price",
                           accessor: "PHSD.price",
                            Cell: ({ value }) => {
                            const currency = value.toLocaleString(undefined, { maximumFractionDigits: 3 });
                            return currency;
                        }



                    }
                ]
            }
        ]
       
    },
   
]