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

    <simpleType name="PostalCodeType">
        <restriction base="integer">
            <pattern value="\d{5}" />
        </restriction>
    </simpleType>

    <complexType name="UserAddressType">
        <sequence>
            <element name="houseNo" type="string" />
            <element name="Street" type="string" />
            <element name="subDistrict" type="string" />
            <element name="district" type="string" />
            <element name="province" type="string" />
            <element name="postalCode" type="PostalCodeType" />
        </sequence>
    </complexType>

    <complexType name="OrderInfoType">
        <element name="orderId" type="string" />
        <element name="orderStatus" type="OrderStatusType" />
        <element name="userId" type="string" />
        <element name="userAddress" type="UserAddressType" />
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

    <complexType name="DriverInfoType">
        <element name="driverId" type="string" />

        <complexType name="driverName">
            <element name="fname" type="string" />
            <element name="lname" type="string" />
        </complexType>

        <element name="driverPhonenum" >
            <simpleType>
                <restriction base="integer">
                    <pattern value="(08|09)\d{8}" />
                </restriction>
            </simpleType>
        </element>

        <element name="driverVehicle" type="string" />
        <element name="rating" type="float" />
        <element name="driverLocation" >
            <complexType>
                <element name="latitude" type="decimal" />
                <element name="longitude" type="decimal" />
                <element name="timestamp" type="dateTime" />
                <element name="address" type="UserAddressType" />
            </complexType>
        </element>
        <element name="driverBankName" type="string" />
        <element name="driverAccountNo">
            <simpleType>
                <restriction base="integer">
                    <pattern value="\d{10}" />
                </restriction>
            </simpleType>
        </element>
    </complexType>

    <element name="CreateOrderRequest">
        <complexType>
            <element name="cartId" type="string" />
            <element name="userId" type="string" />

            <element name="confirmStatus">
                <simpleType >
                    <restriction base="string">
                        <enumeration value="confirm" />
                        <enumeration value="notConfirm" />
                    </restriction>
                </simpleType>
            </element>
        </complexType>
    </element>

    <element name="CreateOrderRespond">
        <element name="orderInfo" type="OrderInfoType" />

        <element name="itemsInfo" minOccurs="1" >
            <complexType>
                <sequence>
                    <element
                        name="itemInfo"
                        type="ItemInfoType"
                        minOccurs="1"
                        maxOccurs="unbounded"
                    />
                </sequence>
            </complexType>
        </element>
        <element 
            name="driverInfo" 
            type="DriverInfoType" 
            minOccurs="0" 
            nillable="true" 
        />
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

            <element 
                name="driverInfo" 
                type="DriverInfoType" 
                minOccurs="0" 
                nillable="true"
            />
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
            <element name="ordersInfo">
                <complexType>
                    <sequence>
                        <element
                            name="orderInfo"
                            type="OrderInfoType"
                        />
                    </sequence>
                </complexType>
            </element>

            <element name="itemsInfo" >
                <complexType minOccurs="1" >
                    <sequence >
                        <element
                            name="itemInfo"
                            type="ItemInfoType"
                            minOccurs="1"
                            maxOccurs="unbounded"
                        />
                    </sequence>
                </complexType>
            </element>
            <element 
                name="driverInfo" 
                type="DriverInfoType" 
                minOccurs="0" 
                nillable="true" 
            />
        </complexType>
    </element>

</schema> 