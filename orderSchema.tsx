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
</schema> 