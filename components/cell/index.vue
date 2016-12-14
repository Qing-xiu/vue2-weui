

<script>
	export default {
		props: {
			link: String
		},
		render (h) {
			return (
				this.link ? 
					<a href={this.link} class="weui-cell weui-cell_access">{this.$slots.default}</a> 
					: 
					<div class="weui-cell">{this.$slots.default}</div>
			)
		}
	}
</script>