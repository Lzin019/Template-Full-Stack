"use client";

import { Form, Input, InputNumber, Modal } from "antd";

export default function FormModal({ openModal, serie, confirmLoading, onSubmit, onCancel }) {
    const [form] = Form.useForm();

    return (
        <Modal
            open={openModal}
            title={serie ? "Editar série" : "Cria nova série"}
            centered
            onOk={() => form.submit()}
            onCancel={onCancel}
            confirmLoading={confirmLoading}
            destroyOnHidden
        >
            <Form
                form={form}
                layout="vetical"
                initialValues={serie}
                onFinish={onSubmit}
            >
                <Form.Item
                    name="title"
                    label="Título"
                    rules={[{
                        required: true,
                        min: 3,
                        max: 120,
                        message: "Título obrigatório. Deve ter entre 3 e 120 caracteres"
                    }]}
                >
                    <Input placeholder="Ex: Breaking Bad" />
                </Form.Item>
                <Form.Item
                    name="genero"
                    label="Gênero"
                    rules={[{
                        required: true,
                        message: "Gênero obrigatório."
                    }]}
                >
                    <Input placeholder="Ex: Drama" />
                </Form.Item>
                <Form.Item
                    name="plataforma"
                    label="Plataforma"
                    rules={[{
                        required: true,
                        message: "Plataforma obrigatória."
                    }]}
                >
                    <Input placeholder="Ex: Netflix" />
                </Form.Item>
                <Form.Item
                    name="numero_temporadas"
                    label="Temporadas"
                    rules={[{
                        required: true,
                        type: "number",
                        message: "Número de temporados obrigatório."
                    }]}
                >
                    <InputNumber placeholder="Ex: 5" min={1} />
                </Form.Item>
                <Form.Item
                    name="ano_lancamento"
                    label="Ano de Lançamento"
                    rules={[{
                        required: true,
                        type: "number",
                        message: "Ano de Lançamento é obrigatório"
                    }]}
                >
                    <InputNumber placeholder="Ex: 2008" min={1900} max={2100} />
                </Form.Item>
                <Form.Item
                    name="imageUrl"
                    label="URL da imagem"
                    rules={[{
                        type: "url",
                        message: "Deve ser uma URL válida!"
                    }]}
                >
                    <InputNumber placeholder="Ex: https://codeverse.dev.br"/>
                </Form.Item>
            </Form>
        </Modal>
    );
}