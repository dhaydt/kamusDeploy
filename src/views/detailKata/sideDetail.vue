<template>
	<div class="sideCol">
		<b-card-group deck class="mt-4">
			<b-card class="text-left">
				<div class="kbbiPop mb-4 pb-2">
					<h6 class="mb-0 text-left section-label mb-4 text-bold">
						Kamus KBBI Populer
					</h6>
					<b-list-group v-for="kata in popKbbi.slice(0, 5)" :key="kata._id">
						<b-list-group-item class="justify-content-between d-flex listGroup"
							><span class="span">{{ kata.kata }}</span>
							<b-badge pill variant="primary">{{
								kata.view / 2
							}}</b-badge></b-list-group-item
						>
					</b-list-group>
				</div>
			</b-card>
		</b-card-group>
		<b-card-group deck class="mt-4">
			<b-card class="text-left" style="background-color: yellow">
				banner iklan
			</b-card>
		</b-card-group>
		<b-card-group deck class="mt-4">
			<b-card class="text-left">
				<div class="kbbiPop mb-4 pb-2">
					<h6 class="mb-0 text-left section-label mb-4 text-bold">
						Kamus Istilah Populer
					</h6>
					<b-list-group v-for="kata in popIstilah.slice(0, 5)" :key="kata.id">
						<b-list-group-item class="justify-content-between d-flex listGroup"
							><span class="span">{{ kata.judul_glos }}</span>
							<b-badge pill variant="primary">{{
								kata.view / 2
							}}</b-badge></b-list-group-item
						>
					</b-list-group>
				</div>
			</b-card>
		</b-card-group>
	</div>
</template>

<script>
export default {
	props: ["dataKata"],
	data() {
		return {
			popKbbi: [],
			popIstilah: [],
		};
	},

	created() {
		this.popKbbi = JSON.parse(localStorage.popKbbi);
		this.popIstilah = JSON.parse(localStorage.popIstilah);
	},
};
</script>

<style lang="scss" scoped>
.kbbiPop {
	border-bottom: 2px solid grey;

	h6 {
		font-weight: 900;
	}
}

.listGroup .badge {
	line-height: 1.5;
}

.span {
	text-transform: capitalize;
	font-size: 16px;
}

.istilah-pop {
	h6 {
		font-weight: 900;
	}
}
</style>