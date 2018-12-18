<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="article">
<html>
<head>
	<title>Pinguins</title>
</head>
<body>
<basefont face="Verdana" size="2" /> 
  <xsl:apply-templates /> 
</body>
</html>
</xsl:template>

<xsl:template match="date">
<p>
<font face="verdana" size="1">
  <xsl:apply-templates /> 
  </font>
  </p>
</xsl:template>

<xsl:template match="para">
<p><xsl:apply-templates /></p>
</xsl:template>

<xsl:template match="title">
<p>
<font face="verdana" color="steelblue" size="3">
<b>
  <xsl:apply-templates /> 
  </b>
  </font>
  </p>
</xsl:template>

<xsl:template match="place">
<font face="verdana" size="2">
<b>
  <xsl:apply-templates /> 
  </b>  
  </font>
</xsl:template>

<xsl:template match="company">
<i>
  <xsl:value-of select="." /> 
  </i>
</xsl:template>

<xsl:template match="link">
<u>
<font color="blue">
  <xsl:apply-templates /> 
  </font>
  </u>
</xsl:template>

<xsl:template match="source">
<font size="1">
  <xsl:apply-templates /> 
  </font>
</xsl:template>

</xsl:stylesheet>
