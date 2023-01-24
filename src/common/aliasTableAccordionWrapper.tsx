import * as React from "react";
import {ReactNode} from "react";
import {DataList, DataTable, Table, TableBody, TableCell, TableHead, TableRow} from "./demoComponents";

type WrapperProps = {
    dataTableColumns?: {
        key: string,
        header: string,
        type: "string" | "number" |"date"
    }[],
    dataTableData?: object[],
    headerContent: ReactNode[]
    listData?: any[]
    isDataTable?: boolean
};

const Wrapper = ({
        dataTableColumns = [],
        dataTableData = [],
        headerContent = [],
        listData = [],
        isDataTable = false
    }: WrapperProps) => {

    const dataTable = <DataTable columns={dataTableColumns} data={dataTableData} />
    const dataList = <DataList data={listData} />

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {
                        headerContent?.map((jsx, index) =>
                            <TableCell key={index}>{jsx}</TableCell>
                        )
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    {isDataTable && dataTable || dataList}
                </TableRow>
            </TableBody>
        </Table>
    )
}

type AccordionTableProps = {
    columns: {
        key: string,
        header: string,
        type: "string" | "number" |"date"
    }[],
    data: object[],
    headerContent: ReactNode[]
};

export const AccordionDataTable = ({columns,headerContent,data}: AccordionTableProps) => {
    return <Wrapper headerContent={headerContent} dataTableData={data} dataTableColumns={columns} isDataTable/>
}

type AccordionDataListProps = {
    headerContent: ReactNode[]
    listData: any[]
};

export const AccordionDataList = ({headerContent, listData}: AccordionDataListProps) => {
    return <Wrapper headerContent={headerContent} listData={listData} />
}