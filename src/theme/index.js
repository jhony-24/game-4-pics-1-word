export const PRIMARY_COLOR =
	"linear-gradient(45deg,rgb(30,130,230),rgb(140,50,200))"
export const TEXT_PRIMARY = "#ffffff"
export const TEXT_SECONDARY = "rgb(30,130,230)"
export const TEXT_DARK = "rgb(30,30,30)"
export const SILVER_COLOR = "rgba(100,100,100,.2)"

const COLOR_BASE = {
	color_primary: "rgb(30,130,230)",
	color_secondary: "rgb(140,50,200)",
	color_primary_dark: "rgb(30,30,30)",
	color_primary_light: "#ffffff",
	color_smooth: "rgba(100,100,100,.2)",
	color_smooth_medium : "gray",
	color_smooth_darker: "rgba(30,30,30,.5)",
	color_smooth_darker_modal : "rgba(30,30,30,.5)",
}

const COLOR_GRADIENT = {
	color_primary_gradient: `linear-gradient(45deg,${COLOR_BASE.color_primary},${COLOR_BASE.color_secondary})`,
}

const FONT_SIZES = {
	smallUltra: "0.7rem",
	small: "12px",
	normal: "13px",
	medium: "16px",
	large: "20px",
	largeUltra : "1.5rem",
	largeUltra2 : "3rem"
}

const SHADOWS = {
	normal: "0 15px 20px rgba(100,100,100,.3)",
	medium: "0 10px 20px rgba(0,0,0,.1)",
	large : "0 20px 30px rgba(0,0,0,.1)",
}

const RADIUS = {
	small: "10px",
	normal: "20px",
	total: "100%",
}

const SIZES = {
	normal: "45px",
	medium: "65px",
	large: "120px",
}

const MARGINS = ["", "", "", "", "", ""]

const PADDINGS = ["", "", "", "", "", "", ""]

const theme = {
	colors: COLOR_BASE,
	gradients: COLOR_GRADIENT,
	fontSizes: FONT_SIZES,
	shadows: SHADOWS,
	radius: RADIUS,
	sizes: SIZES,
	paddings: PADDINGS,
	margins: MARGINS,
}

export default theme
