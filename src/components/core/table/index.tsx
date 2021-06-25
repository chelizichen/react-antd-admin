import TableColumn from '../table-column';
import { Table, TableProps } from 'antd';
import { css } from '@emotion/react';

interface MyTableProps<T extends object> extends TableProps<T> {
  height?: string;
}

const MyTable = <T extends object = {}>(props: MyTableProps<T>) => {
  const { height, ...rest } = props;

  return (
    <div style={{ height }} css={styles}>
      <Table<T> {...rest} scroll={{ x: 'max-content', y: '100%' }} />
    </div>
  );
};

MyTable.defaultProps = {
  size: 'small',
  height: 'auto',
  pagination: {
    size: 'default',
    showQuickJumper: true,
    showSizeChanger: true,
    pageSizeOptions: ['10', '20', '50', '100', '200'],
    defaultPageSize: 20
  }
} as MyTableProps<any>;

MyTable.Column = TableColumn;
MyTable.ColumnGroup = Table.ColumnGroup;

export default MyTable;

const styles = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #ffffff;

  .ant-table-wrapper,
  .ant-spin-nested-loading,
  .ant-spin-container,
  .ant-table-container {
    height: 100%;
  }
  .ant-spin-container {
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .ant-table {
      flex: 1;
      overflow: hidden;
      border-bottom: 1px solid #eee;

      .ant-table-container {
        display: flex;
        flex-direction: column;
        .ant-table-body {
          flex: 1;
        }
      }
    }

    .ant-pagination {
      padding: 0 10px;
    }
  }
`;
