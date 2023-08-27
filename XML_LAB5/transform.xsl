<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/products">
    <html>

      <body>
        <h1 style="text-align:center;">List Of Products</h1>
        <table border="1"
          style="width:70%; height: 600px; border-radius: 1rem; margin:auto; border-collapse: seperate;">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>

          <xsl:for-each select="product" >
            <tr>
              <td>
                <xsl:value-of select="id" />
              </td>
              <td>
                <xsl:value-of select="name" />
              </td>
              <td>
                <xsl:value-of select="price" />
              </td>
              <td>
                <xsl:value-of select="description" />
              </td>
            </tr>
          </xsl:for-each>
          <!-- Apply the transformation to each record -->
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
