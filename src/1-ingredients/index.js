import './style.scss'
import './editor.scss'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { RichText } = wp.blockEditor

registerBlockType(
	'capitainewp/ingredients',
	{
		title: __( "Ingrédients"),
		description: __("Une belle liste d'ingrédients pour vos recettes de cuisine"),
		icon: 'carrot',
		category: 'common',
		keywords: [
			__( 'liste de courses' ),
		],

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: '.wp-block-capitainewp-ingredients__content'
			},
			ingredients: {
				type: 'array',
				source: 'children',
				selector: '.wp-block-capitainewp-ingredients__list'
			},
    },

		edit: props => {

			return (
				<div className={ props.className }>
					<RichText
						tagName="div"
						multiline="p"
						placeholder={ __( 'Votre texte ici' ) }
						value={ props.attributes.content }
						className={ props.className + "__content" }
						onChange={ content => props.setAttributes( { content } ) }
					/>
					<RichText
						tagName="ul"
						multiline="li"
						placeholder={ __( '3 Tomates rondes' ) }
						value={ props.attributes.ingredients }
						className={ props.className + "__list" }
						onChange={ ingredients => props.setAttributes( { ingredients } ) }
					/>
				</div>
			)
		},

		save: props => {
			return (
				<div>
					<div className="wp-block-capitainewp-ingredients__content">
						{ props.attributes.content }
					</div>
					<ul className="wp-block-capitainewp-ingredients__list">
						{ props.attributes.ingredients }
					</ul>
				</div>
			)
		},
	}
)
