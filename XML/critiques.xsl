<?xml version="1.0"  encoding="utf-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> 

<xsl:strip-space elements="*"/>

<xsl:output method="html" version="1.0" encoding="UTF-8"/>


<xsl:template match="Film">

    <head>
    </head>
    
    <a><xsl:attribute name="id">
        <xsl:value-of select="@ID"/>
    </xsl:attribute></a>

    <h1><xsl:value-of select="Titre" /></h1>
    <xsl:apply-templates select="Critique" />

</xsl:template>

<xsl:template match='Critique'>
       <h2> <xsl:value-of select="Media" /></h2>
        <xsl:value-of select="Texte"/>
</xsl:template>

</xsl:stylesheet>