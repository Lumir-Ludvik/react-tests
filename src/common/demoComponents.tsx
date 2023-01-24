import * as React from "react";

export function Table(props: { children: React.ReactNode }) {
    return <div></div>;
}

export function TableHead(props: { children: React.ReactNode }) {
    return <div></div>;
}

export function TableRow(props: { children: React.ReactNode }) {
    return <div></div>;
}

export function TableCell(props: { children: React.ReactNode }) {
    return <div></div>;
}

export function TableBody(props: { children: React.ReactNode }) {
    return <div></div>;
}

export const DataTable = ({columns, data}: {columns: {
        key: string,
        header: string,
        type: "string" | "number" |"date"
    }[], data: object[]}) => {
    return <div></div>;
}

export const DataList = ({data}:{data: any[]}) => {
    return <div></div>
}