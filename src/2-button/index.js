import "./style.scss"
import "./editor.scss"

import Settings from './settings'
import Toolbar from './toolbar'
import Block from './block'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

registerBlockType("capitainewp/button", {
	title: __("Bouton amélioré"),
	description: __("Un bouton amélioré avec pleins d'options"),
	icon: "video-alt3",
	category: "common",
	keywords: [
		__("button")
	],

	attributes: {
		text: {
			type: "array",
			source: "children",
			selector: "a",
		},
    url: {
      type: "string",
      source: "attribute",
      selector: "a",
      attribute: "href",
    },
    target: {
      type: "boolean",
    },
    alignment: {
			type: 'string',
		},
		textSize: {
			type: 'integer',
			default: 16,
		},
		padding: {
			type: 'integer',
			default: 16,
		},
		textColor: {
			type: 'string',
			default: "#fff",
		},
		backgroundColor: {
			type: 'string',
			default: "#444",
		},
		withRadius: {
			type: 'boolean',
			default: false,
		},
		radius: {
			type: 'integer',
			default: 8,
		},

	},

	edit: props => {

		const { attributes, className, setAttributes, isSelected } = props
		const { text, url, target, alignment, padding, textSize, textColor, backgroundColor, withRadius, radius } = attributes

		return (
			<Fragment>
				<Toolbar { ...{ alignment, setAttributes} } />
				<Settings { ...{ target, padding, textSize, textColor, backgroundColor, withRadius, radius, setAttributes } } />
				<Block { ...{ className, setAttributes, isSelected, attributes } } />
			</Fragment>
		)
	},

	save: props => {

		const { text, url, target, alignment, padding, textSize, textColor, backgroundColor, withRadius, radius } = props.attributes

		return (
			<p
				style={{
					textAlign: alignment,
				}}
			>
				<a
					style={{
				  	borderRadius: withRadius && radius,
				  	backgroundColor: backgroundColor,
						color: textColor,
						fontSize: textSize + 'px',
						padding: padding + 'px',
					}}
					href={ url }
					target={ target && '_blank' }
				>
				  { text }
				</a>
			</p>
		)
	}
})
