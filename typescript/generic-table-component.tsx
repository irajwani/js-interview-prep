import React from 'react'

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

const Table = <TItem,>(props: TableProps<TItem>) => {
    return null
}

export const App = () => (
    <>
        <Table
            items={[{id: '1', name: 'Imad'}]}
            renderItem={}
        >

        </Table>
    </>
)