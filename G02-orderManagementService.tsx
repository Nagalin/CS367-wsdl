//@ts-nocheck
<schema xmlns="http://www.w3.org/2000/10/XMLSchema">

    <simpleType name="OrderStatusType">
        <restriction base="string">
            <enumeration value="Confirm" />
            <enumeration value="Preparing" />
            <enumeration value="On the Way" />
            <enumeration value="Ready for Pickup" />
            <enumeration value="Delivered" />
            <enumeration value="Completed" />
            <enumeration value="Canceled" />
        </restriction>
    </simpleType>

    <complexType name="OrderInfoType">
        <element name="orderId" type="string" />
        <element name="orderStatus" type="OrderStatusType" />
        <element name="userId" type="string" />
        <element name="userAddress" type="string" />
        <element name="createdAt" type="date" />
        <element name="updatedAt" type="date" />
    </complexType>

    <complexType name="ItemInfoType">
        <element name="itemId" type="string" />
        <element name="itemName" type="string" />
        <element name="itemPic" type="string" />
        <element name="itemQuantity" type="integer" />
        <element name="itemPrice" type="float" />
        <element name="totalPrice" type="float" />
    </complexType>

    <element name="CreateOrderRequest">
        <complextType>
            <element name="cartId" type="string" />
            <element name="userId" type="string" />

            <simpleType name="confirmStatus">
                <restriction base="string">
                    <enumeration value="confirm" />
                    <enumeration value="notConfirm" />
                </restriction>
            </simpleType>
        </complextType>
    </element>

    <element name="CreateOrderRespond">
        <element name="orderInfo" type="OrderInfoType" />

        <complexType name="itemsInfo" minOccurs="1" >
            <sequence>
                <element
                    name="itemInfo"
                    type="ItemInfoType"
                    minOccurs="1"
                    maxOccurs="unbounded"
                />
            </sequence>
        </complexType>

        <element minOccurs="0" nillable="true" >
            <complexType name="driverInfo">
                <element name="driverId" type="string" />
                <complexType name="driverName">
                    <element name="fname" type="string" />
                    <element name="lname" type="string" />
                </complexType>

                <element name="driverPhonenum" >
                    <restriction base="integer">
                        <pattern value="(08|09)\d{8}" />
                    </restriction>
                </element>

                <element name="driverVehicle" type="string" />
                <element name="rating" type="float" />
                <element name="driverLocation" type="string" />
                <element name="driverBankAccount">
                    <complexType>
                    <element name="accountNo">
                        <simpleType>
                            <restriction base="integer">
                                <pattern value="\d{10}" />
                            </restriction>
                        </simpleType>
                    
                    </element>

                    <element name="bankName" type="string"/>

                    </complexType>

                </element>
            </complexType>
        </element>

    </element>

    <element name="UpdateOrderRequest">
        <complexType>
            <element name="orderId" type="string" />
            <element name="userId" type="string" />
            <element name="driverId" type="string" />
        </complexType>
    </element>

    <element name="UpdateOrderRespond">
        <complexType>
            <element name="updateStatus">
                <simpleType>
                    <restriction base="string">
                        <enumeration value="Success" />
                        <enumeration value="Fail" />
                    </restriction>
                </simpleType>
            </element>
        </complexType>
    </element>

    <element name="UpdateOrderStatusRequest">
        <complexType>
            <element name="orderId" type="string" />
            <element name="userId" type="string" />
            <element name="newOrderStatus" type="OrderStatusType" />
        </complexType>
    </element>

    <element name="UpdateOrderStatusRespond">
        <complexType>
            <element name="OrderStatus" type="OrderStatusType" />
        </complexType>
    </element>

    <element name="CancelOrderRequest">
        <complexType>
            <element name="orderId" type="string" />
            <element name="userId" type="string" />
            <element name="reasons" type="string" />
        </complexType>
    </element>

    <element name="CancelOrderRespond">
        <complexType>
            <element name="orderStatus" type="OrderStatusType" />
            <element name="orderId" type="string" />
            <element name="fee" type="float" />
        </complexType>
    </element>

    <element name="GetOrderInfoRequest">
        <complexType >
            <element name="userId" />
        </complexType>
    </element>

    <element name="GetOrderInfoRespond">
        <complexType>
            <element name="ordersInfo">
                <complexType>
                    <sequence>
                        <element
                            name="orderInfo"
                            type="OrderInfoType"
                            minOccurs="0"
                            maxOccurs="unbounded" />
                    </sequence>
                </complexType>
            </element>
        </complexType>
    </element>

    <element name="GetOrderInfoWithIdRequest" >
        <complexType>
            <element name="userId" />
            <element name="orderId" />
        </complexType>
    </element>

    <element name="GetOrderInfoWithIdRespond">
        <complexType>
            <complexType>
                <element name="ordersInfo">
                    <sequence>
                        <element
                            name="orderInfo"
                            type="OrderInfoType"
                            minOccurs="0"
                            maxOccurs="unbounded"
                        />
                    </sequence>
                </element>
            </complexType>

            <complexType name="itemsInfo" minOccurs="1" >
                <sequence >
                    <element
                        name="itemInfo"
                        type="ItemInfoType"
                        minOccurs="1"
                        maxOccurs="unbounded"
                    />
                </sequence>
            </complexType>
        </complexType>
    </element>

</schema> 