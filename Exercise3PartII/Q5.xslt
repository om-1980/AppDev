<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Pets Table</title>
                <style>
                    table, th, td {
                        border: 1px solid black;
                        border-collapse: collapse;
                        padding: 5px;
                    }
                </style>
            </head>
            <body>
                <h1>Pets Table</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Type</th>
                        <th>Color</th>
                    </tr>
                    <xsl:apply-templates select="pets/pet"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="pet">
        <tr>
            <td><xsl:value-of select="name"/></td>
            <td><xsl:value-of select="age"/></td>
            <td><xsl:value-of select="type"/></td>
            <td><xsl:value-of select="color"/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
