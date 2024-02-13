<!-- Students.xsl -->

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/Students">
    <html>
      <head>
        <title>Students Information</title>
      </head>
      <body>
        <h2>Students Information</h2>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>CGPA</th>
          </tr>
          <xsl:apply-templates select="Student"/>
        </table>
      </body>
    </html>
  </xsl:template>
  
  <xsl:template match="Student">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="rollno"/></td>
      <td><xsl:value-of select="department"/></td>
      <td><xsl:value-of select="cgpa"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
