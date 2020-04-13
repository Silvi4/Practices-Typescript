import React, { ChangeEvent, useEffect } from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Button, Row, Col} from "antd";
import { useDispatch, useSelector } from 'react-redux';
import {InitialState, RootDispatcher} from '../Store/root-reducer';


interface Props {

}

interface StateProps {
    name: string;
    address: string;
}

const StateHooksComponent: React.FC<Props> = () => {

    const {name, address} = useSelector<InitialState, StateProps>((state: InitialState) => {
        return {
            name: state.name,
            address: state.address
        }
    });

    const dispatch = useDispatch();
    const rootDispatcher = new RootDispatcher(dispatch);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component will be unmount')
        }
    }, []);

console.log(name, address)
console.log(rootDispatcher)
    return (
        <>
        <h2>State Hooks component</h2>
        <Row>
            <Col span={12} offset={6}>
                <Form layout="inline">
                <Form.Item>
                    <Input type="text" placeholder="name" value={name} onChange={(e:ChangeEvent<HTMLInputElement>) => {
                        rootDispatcher.updateName(e.target.value)
                    }} /> 
                    <Input  type="text" placeholder="address" value={address} onChange={(e:ChangeEvent<HTMLInputElement>) => {
                        rootDispatcher.updateAddress(e.target.value)
                    }}/>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
                </Form>
            </Col>
        </Row>
        </>
        
    )
}

export default StateHooksComponent;