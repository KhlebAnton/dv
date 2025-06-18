"use strict";

window.addEventListener("DOMContentLoaded", () => {
	class ModuleSuccessModal {
		constructor() {
			this.modalBlock = document.querySelector('[data-module-success-modal="block"]');
			this.body = document.body;
		}

		openModal() {
			this.modalBlock.classList.add("module-success-modal--opened");
			this.body.classList.add("blocked-scroll");
		}

		closeModal() {
			this.modalBlock.classList.remove("module-success-modal--opened");
			this.body.classList.remove("blocked-scroll");
		}

		setupModal() {
			if (this.modalBlock) {
				this.modalBlock.addEventListener("click", (event) => {
					if (event.target && (event.target.dataset.moduleSuccessModal === "close-btn" || event.target.dataset.moduleSuccessModal === "overlay")) {
						this.closeModal();
					}
				});
			} else {
				console.error("There is no success modal block on the page");
			}
		}
	}

	const successModalInstance = new ModuleSuccessModal();
	successModalInstance.setupModal();
	window.successModalInstance = successModalInstance;
});
