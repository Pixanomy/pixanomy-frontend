<template>
	<div class="cartPage">
		<form action="">
			<v-row>
				<v-col cols="8">
					<v-row>
						<v-col cols="12">
							<v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
								<v-toolbar color="transparent" density="compact" title="Items (2 Items)">
									<v-btn prepend-icon="fas fa-trash">Remove All</v-btn>
								</v-toolbar>
								<v-table fixed-header>
									<thead>
										<tr>
											<th class="text-left">
												Image
											</th>
											<th class="text-left">
												Product Name
											</th>
											<th class="text-left">
												Price
											</th>
											<th class="text-left">
												Color
											</th>
											<th class="text-left">
												Size
											</th>
											<th class="text-left">
												Quantity
											</th>
											<th class="text-left">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<v-avatar image="https://cdn.vuetifyjs.com/images/john.jpg" rounded="0"
													size="70"></v-avatar>
											</td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td>
												<v-text-field type="number" label="Quantity" hide-details="auto">
												</v-text-field>
											</td>
											<td>
												<v-btn icon="fas fa-xmark" size="x-small"></v-btn>
											</td>
										</tr>
									</tbody>
								</v-table>
							</v-card>
						</v-col>

						<v-col cols="12">
							<v-text-field clearable label="Add Coupon"></v-text-field>
						</v-col>

						<v-col cols="12">
							<v-card style="padding-left: 15px; padding-bottom: 15px;">
								<v-tabs v-model="tab" bg-color="transparent">
									<v-tab value="one">Billing Address</v-tab>
									<v-tab value="two">Shipping Address</v-tab>
								</v-tabs>

								<v-card-text>
									<v-window v-model="tab">
										<v-window-item value="one">
											<billingaddress />
										</v-window-item>

										<v-window-item value="two">
											<shippingaddress />
										</v-window-item>
									</v-window>
								</v-card-text>
							</v-card>
						</v-col>
					</v-row>
				</v-col>

				<v-col cols="4">
					<v-row>
						<v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
							<v-col cols="12">
								<v-toolbar color="transparent" density="compact" title="Order Summary"></v-toolbar>
								<v-table fixed-header>
									<tr>
										<th>Subtotal</th>
										<td>$ </td>
									</tr>
									<v-divider></v-divider>
									<tr>
										<th>Discount</th>
										<td>- ( $ )</td>
									</tr>
									<v-divider></v-divider>
									<tr>
										<th>Shipping</th>
										<td></td>
									</tr>
									<v-divider></v-divider>
									<tr>
										<th>
											<h5 style="color: orange;">Total Price</h5>
										</th>
										<td>$ </td>
									</tr>
								</v-table>
							</v-col>

							<v-col cols="12">
								<v-toolbar color="transparent" density="compact" title="Checkout"></v-toolbar>

								<v-row>
									<v-col cols="12">
										<v-text-field label="Cardholder Name"></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-text-field type="number" label="Card Number"></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field type="date" label="Expiration Date"></v-text-field>
									</v-col>
									<v-col cols="6">
										<v-text-field type="number" label="CVC"></v-text-field>
									</v-col>
									<v-col cols="12">
										<v-btn width="100%" color="orange">Pay Now</v-btn>
									</v-col>
								</v-row>

							</v-col>
						</v-card>
					</v-row>
				</v-col>
			</v-row>
		</form>
	</div>
</template>

<script>
	import billingaddress from '../../components/Commerce/billingaddress.vue'
	import shippingaddress from '../../components/Commerce/shippingaddress.vue'

	export default {
		components: {
			billingaddress,
			shippingaddress
		}
	}
</script>

<script setup>
	useHead({
		title: 'Shopping Cart',
	})
</script>