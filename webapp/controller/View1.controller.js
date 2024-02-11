sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
	"sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox,MessageToast) {
        "use strict";

        return Controller.extend("assignment1.assignment1.controller.View1", {
            onInit: function () {
                var oModel = this.getOwnerComponent().getModel("SampleModel");

                this.getView().setModel(oModel);

            },
            handleClick: function(){
                var FirstInput = this.getView().byId("idCustomerID").getValue();
                var SecondInput = this.getView().byId("idCustomerName").getValue();
                var ThirdInput = this.getView().byId("idCustomerEmailAddress").getValue();
                var FourthdInput = this.getView().byId("idCustomerPhoneNumber").getValue();
               
                MessageBox.information("Customer ID: "+FirstInput+"  \n Customer Name: " + SecondInput +"\nEmail Address: " + ThirdInput +"\nPhone Numer: " + FourthdInput,{
                    title: "Customer Information"});
            }
        });
    });
