import xmlschema
xml_file = "products.xml"
xsd_file = "product_schema.xsd"

validator = xmlschema.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid against the XSD schema.")
else:
    print("XML file is not valid against the XSD schema.")
    print(validator.validate(xml_file))


from lxml import etree

# Load XML and XSL files
xml_tree = etree.parse("products.xml")
xsl_tree = etree.parse("transform.xsl")

# Apply transformation
transform = etree.XSLT(xsl_tree)
html_result = transform(xml_tree)

# Save the HTML result to a file
with open("output.html", "wb") as html_file:
    html_file.write(etree.tostring(html_result, pretty_print=True))
