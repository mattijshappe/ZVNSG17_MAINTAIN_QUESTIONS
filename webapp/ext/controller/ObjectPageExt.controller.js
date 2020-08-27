sap.ui.controller("ZVNSG17_MAINTAIN_QUESTIONS.ext.controller.ObjectPageExt", {
	// onAfterRendering : function () {
	// 	if(this.getView().getBindingContext()) {
	// 	      alert("test");
	//         this._oDataModel = this.getOwnerComponent().getModel();
	//         this._oPath = this.getView().getBindingContext().getPath();
	//          this._oDataModel.attachEventOnce("batchRequestCompleted", this.onBatchRequestCompleted);
	// 	}
	// },
	onInit: function() {
		// var oOdataModel = this.getOwnerComponent().getModel();
		// oOdataModel.attachBatchRequestCompleted(function(oEvent) {
		// 	//this.extensionAPI.getTransactionController().attachAfterSave
		// 	//this.extensionAPI.getTransactionController().attachAfterSave(function(oEvet){
		// 	var path = this.getView().getBindingContext().getPath();
		// 	//		this.getView().bindElement(path);            
		// }.bind(this));
	},
	onClickActionZvnsg17_QuestionsHeader1: function(oEvent) {
			//		this.getView().getModel().updateBindings();
			var path = this.getView().getBindingContext().getPath();
			this.getView().bindElement(path);
		}
		//     onBatchRequestCompleted: function(oData) {
		//       alert("ipdate");
		// 		//var path = this.getView().getBindingContext().getPath();
		// 		alert(this._oPath);
		// //		this.getView().bindElement(path);      
		//     },	
});