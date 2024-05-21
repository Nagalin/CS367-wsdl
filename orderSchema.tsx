//@ts-nocheck
/**
 * 
 * 
 * 
 * 
 */
<schema xmlns="http://www.w3.org/2000/10/XMLSchema">
    <complexType name="createOrderRequest">
        <element name="userId" type="string" />
        <element name="cartId" type="string" />
        <element name="confirmStatus" type="string" />
    </complexType>

    <complexType name="createOrderRespond">

        <complexType name="orderInfo">
            <element name="orderId" type="string" />
            <element name="orderStatus" type="string" />
            <element name="userId" type="string" />
            <element name="userAddress" type="string" />
            <element name="createdAt" type="date" />
            <element name="updatedAt" type="date" />
        </complexType>

        <complexType name="itemsInfo" minOccurs="1" >
            <sequence minOccurs="1">
                <complexType name="itemInfo">
                    <element name="itemId" type="string" />
                    <element name="itemName" type="string" />
                    <element name="itemPic" type="string" />
                    <element name="itemQuantity" type="integer" />
                    <element name="itemPrice" type="float" />
                    <element name="totalPrice" type="float" />
                </complexType>
            </sequence>
        </complexType>

    

        {deliveryManagementDependencies }
        <complexType name="driverInfo" minOccurs="0" nillable="true" >
            <element name="driverId" type="string" />
            <element name="driverName" type="string" />

            <element name="driverPhonenum" >
                <restriction base="integer">
                    <pattern value="(08|09)\d{8}" />
                </restriction>
            </element>

            <element name="driverVehicle" type="string" />
            <element name="rating" type="float" />
            <element name="driverLocation" type="string" />
            <element name="driverBankAccoun" type="string" />
        </complexType>


    </complexType>

    <complexType name="updateOrderRequest">
        <element name="orderId" type="string" />
        <element name="userId" type="string" />
        <element name="driverId" type="string" />
    </complexType>

    <simpleType name="updateOrderRespond" type="string">
        <restriction base="string">
            <enumeration value="success" />
            <enumeration value="fail" />
        </restriction>
    </simpleType>

    <complexType name="updateOrderStatusRequest">
        <element name="orderId" type="string" />
        <element name="userId" type="string" />
        <element name="newOrderStatus" type="string" />

    </complexType>

    <complexType name="updateOrderStatusRespond">
        <element name="orderStatus" type="string" />
    </complexType>

    <complexType name="cancelOrderRequest">
        <element name="orderId" type="string" />
        <element name="reasons" type="string" />

    </complexType>

    <complexType name="cancelOrderRespond">
        <element name="orderStatus" type="string" />
        <element name="orderId" type="string" />

    </complexType>

    <complexType name="getOrderInfoRequest">
        <element name="userId" />

    </complexType>

    <complexType name="getOrderInfoRespond">
        <complexType name="ordersInfo" type="string" >
            <sequence>
                <complexType name="orderInfo">
                    <element name="orderId" type="string" />
                    <element name="orderStatus" type="string" />
                    <element name="userId" type="string" />
                    <element name="userAddress" type="string" />
                    <element name="createdAt" type="string" />
                    <element name="updatedAt" type="string" />

                </complexType>
            </sequence>
        </complexType>

    </complexType>

    <complexType name="getOrderInfoWithIdRequest">
        <element name="userId" />
        <element name="orderId" />
    </complexType>

    <complexType name="getOrderInfoWithIdRespond">
        <element name="userId" />
        <element name="orderId" />

        <complexType name="ordersInfo">
        <complexType name="orderInfo" type="string" >
            <sequence>
               
                <element name="orderId" type="string" />
                <element name="orderStatus" type="string" />
                <element name="userId" type="string" />
                <element name="userAddress" type="string" />
                <element name="createdAt" type="date" />
                <element name="updatedAt" type="date" />
            </sequence>
            </complexType>
        </complexType>

    </complexType>


</schema> 