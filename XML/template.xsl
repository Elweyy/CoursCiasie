<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> 
<xsl:strip-space elements="*"/>

<xsl:template match="/">
    <xsl:apply-templates/>
</xsl:template>

<xsl:template match='Film'>
    titre: <xsl:value-of select="Titre" />
    <xsl:apply-templates select="Resume"/>
    <xsl:apply-templates select="Critique"/>

</xsl:template>

<xsl:template match='Resume'>
    resume: <xsl:value-of select="Titre" />

</xsl:template>

<xsl:template match='Critique'>
    critique: <xsl:value-of select="Titre" />

</xsl:template>


</xsl:stylesheet>