const { __ } = wp.i18n
const { RichText, URLInput } = wp.blockEditor
const { Dashicon, IconButton } = wp.components
const { Component } = wp.element

export default class Block extends Component {

	render() {

		const { attributes: { text, url, alignment, padding, textSize, textColor, backgroundColor, withRadius, radius}, className, setAttributes, isSelected } = this.props

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
					<form 
						className='block-library-button__inline-link'
						onSubmit={ ( event ) => event.preventDefault() }
					>
						<Dashicon icon="admin-links" />
						<URLInput
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
				) }
			</p>
		)
	}
}
