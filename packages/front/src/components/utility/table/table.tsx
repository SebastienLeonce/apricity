interface Props {
    data: {
        value: string;
        count: number;
        average_age: number;
    }[];
}

const Table = ({ data }: Props) => {
    return (
        <div className="border h-96 overflow-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="border-r-2">value</th>
                        <th className="border-r-2">count</th>
                        <th>average_age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, 100).map((item) => {
                        return (
                            <tr>
                                <td className="pl-4 border-r-2">
                                    {item.value || 'Null'}
                                </td>
                                <td className="text-center border-r-2">
                                    {item.count}
                                </td>
                                <td className="text-center">
                                    {item.average_age || 'Null'}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
