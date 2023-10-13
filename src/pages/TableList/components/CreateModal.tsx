import {
    ProFormText,
    ModalForm,
    ProColumns,
    ProFormTextArea,
    ProTable

} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';
export type FormValueType = {
    target?: string;
    template?: string;
    type?: string;
    time?: string;
    frequency?: string;
} & Partial<API.RuleListItem>;
export type Props = {
    onCancel: () => void;
    columns: ProColumns<API.RuleListItem>[],
    onSubmit: (values: FormValueType) => Promise<void>;
    updateModalOpen: boolean;
    visible: boolean;

};
const CreateModal: React.FC<Props> = (props) => {
    const { columns } = props
    return (
        <Modal>

            <ProTable type="form" columns={columns} />

        </Modal>






    );
};
export default CreateModal;
