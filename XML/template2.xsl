<?xml version="1.0"  encoding="utf-8" standalone="no"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"> 

<xsl:strip-space elements="*"/>

<xsl:output method="html" version="1.0" encoding="UTF-8"/>

<xsl:template match="/">

    <head>
    <style> 
        table, tr, th, td{
        border: solid 1px black;
        text-align: left;
        }
        img {
        height:100px;
        width:auto;
        }
        span{
        color:red;
        }
    </style>
    </head>
    <h1> Liste des  <xsl:value-of select="count(//Film)"/> films de ma base </h1>
    <table>
        <tr>
            <th> N° </th>
            <th> Titre </th>
            <th> Realisateur </th>
            <th> Pays </th>
            <th> Genre </th>
            <th> Durée </th>
            <th> Affiche </th>
            <th> Critique (<span>Ils ont aimé</span>) </th>
        </tr>
        <xsl:apply-templates/>
        </table>
</xsl:template>

<xsl:template match='Film'>
    <tr>
        <td> <xsl:value-of select="position()"/> </td>
        <td style="font-weight:bold" ><xsl:value-of select="Titre" /></td>
        <td>
            <xsl:choose>
                <xsl:when test="count(Realisateur) &gt; 2">
                    <i>Film collectif</i>
                </xsl:when>
                <xsl:otherwise test="count(Realisteur) &lt; 3" >
                    <xsl:apply-templates select='Realisateur'/>
                </xsl:otherwise>
            </xsl:choose>
    </td>
        <td><xsl:value-of select="Pays" /></td>
        <td><xsl:value-of select="Genre" /></td>
        <td><xsl:value-of select="Duree" /></td>
        <td> 
            <xsl:element name="img">
                <xsl:attribute name="src"><xsl:value-of select="@Affiche"/></xsl:attribute>
            </xsl:element>
        </td>
        <td> 
            <xsl:apply-templates select="Critique"/>
            <a>
            <xsl:attribute name="href">
                critiques.html/#<xsl:value-of select="@ID" />
            </xsl:attribute>
             Lire la critique 
             </a> 

        </td>
    </tr>

</xsl:template>

<xsl:template match='Critique'>
    <xsl:if test="Note &gt; 2">
        <span><xsl:value-of select="Media" /></span>
    </xsl:if>

</xsl:template>

<xsl:template match='Realisateur'>
    <strong><xsl:value-of select='Nom'/></strong>
        <xsl:text> </xsl:text>
    <xsl:value-of select='Prenom'/><br/> 
</xsl:template>


</xsl:stylesheet>