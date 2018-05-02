const { Component } = wp.element
const { __ } = wp.i18n

const { RichText, UrlInput } = wp.blocks
const { Dashicon, IconButton } = wp.components
const { Fragment } = wp.element

export default class Block extends Component {

	constructor( props ) {
		super( props )
	}

	render() {

		const { attributes: { text, url, target, alignment, padding, textSize, textColor, backgroundColor, withRadius, radius}, className, setAttributes, isSelected } = this.props

		return (
			<p
				style={{
					textAlign: alignment,
				}}
				className={ className }
			>
				<div
					style={ {
						borderRadius: withRadius && radius,
						backgroundColor: backgroundColor,
						fontSize: textSize + 'px',
						padding: padding + 'px',
					} }
				>
					<RichText
						tagName="a"
						placeholder={__("Intitulé du bouton")}
						value={ text }
						onChange={ text => setAttributes({ text })}
						style={ {
							color: textColor,
						} }
					/>
				</div>

				<br />

				{ isSelected && (
					<form className='blocks-button__inline-link'>
						<Dashicon icon="admin-links" />
						<UrlInput
							className="url"
							value={ url }
							onChange={ url => setAttributes( { url } ) }
						/>
						<IconButton
              icon="editor-break"
              label={ __( 'Appliquer' ) }
              type="submit"
            />
					</form>
				)}
			</p>
		)
	}
}
