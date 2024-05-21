//@ts-nocheck
/**
 * 
 * 
 * 
 * 
 * 
 * 
 */
<definition name="OrderManagement"
    targetNamespace="http://delivery.com/ordermanagement.wsdl"
    xmlns:tns="http://delivery.com/ordermanagement.wsdl"
    xmlns:xsdl="http://delivery.com/ordermanagement.wsdl"
    xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
    xmlns:http="http://schemas.xmlsoap.org/soap/"
>


    <message name="CreateOrderInput">
        <part name="body" element="xsdl:CreateOrderRequest" />
    </message>

    <message name="CreateOrderOutput">
        <part name="body" element="xsdl:CreateOrderRespond" />
    </message>

    <message name="UpdateOrderInput">
        <part name="body" element="xsdl:UpdateOrderRequest" />
    </message>

    <message name="UpdateOrderOutput">
        <part name="body" element="xsdl:UpdateOrderRespond" />
    </message>

    <message name="UpdateOrderStatusInput">
        <part name="body" element="xsdl:UpdateOrderRequest" />
    </message>

    <message name="UpdateOrderStatusOutput">
        <part name="body" element="xsdl:UpdateOrderRespond" />
    </message>

    <message name="CancelOrderInput">
        <part name="body" element="xsdl:CancelOrderRequest" />
    </message>

    <message name="CancelOrderOutput">
        <part name="body" element="xsdl:CancelOrderRespond" />
    </message>

    <message name="GetOrderInfoInput">
        <part name="body" element="xsdl:GetOrderInfoRequest" />
    </message>

    <message name="GetOrderInfoOutput">
        <part name="body" element="xsdl:GetOrderInfoRespond" />
    </message>

    <message name="GetOrderInfoWithIdOutput">
        <part name="body" element="xsdl:GetOrderInfoWithIdRequest" />
    </message>

    <message name="GetOrderInfoWithIdOutput">
        <part name="body" element="xsdl:GetOrderInfoWithIdRespond" />
    </message>



    <portType name="OrderManagementPortType">
        <operation name="CreateOrder">
            <input message="tns:CreateOrderInput" />
            <output message="tns:CreateOrderOutput" />
        </operation>

        <operation name="updateOrder">
            <input message="tns:UpdateOrderInput" />
            <output message="tns:UpdateOrderOutput" />

        </operation>

        <operation name="updateOrderStatus">

            <input message="tns:UpdateOrderInput" />
            <output message="tns:UpdateOrderOutput" />
        </operation>

        <operation name="cancelOrder">
            <input message="tns:CancelOrderInput" />
            <output message="tns:CancelOrderOutput" />

        </operation>

        <operation name="getOrderInfo">
            <input message="tns:GetOrderInfoInput" />
            <output message="tns:GetOrderInfoOutput" />

        </operation>

        <operation name="getOrderInfoWithId">

            <input message="tns:GetOrderInfoWithIdInput" />
            <output message="tns:GetOrderInfoWithIdOutput" />
        </operation>

    </portType>

    <service name="OrderManagementService">
        <document>My first service</document>
        <port name="OrderManagementPort" binding="tns:OrderManagementSoapBinding">
            <soap:address location="http://delivery.com/OrderManagementService" />
        </port>

    </service>

</definition>

