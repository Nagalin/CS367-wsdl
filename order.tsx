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

    <types>
        <schema 
            targetNamespace="http://delivery.com/stockqueto.xsd"
            xmlns="http://www.w3.org/2000/10/XMLSchema"
        >
            <element name="CreateOrderRequest">

            </element>

        </schema>

    </types>

    <message>

    </message>

    <portType name="OrderManagementPortType">
        <operation name="CreateOrder">

           
        </operation>

        <operation name="updateOrder">
            
           
        </operation>

        <operation name="updateOrderStatus">
            
           
        </operation>

        <operation name="cancelOrder">
            
           
        </operation>

        <operation name="getOrderInfo">
            
           
        </operation>

        <operation name="getOrderInfoWithId">
            
           
        </operation>

    </portType>

    <service name="OrderManagementService">
        <document>My first service</document>
        <port name="OrderManagementPort" binding="tns:OrderManagementSoapBinding">
            <soap:address location="http://delivery.com/OrderManagementService" />
        </port> 

    </service>

</definition>

