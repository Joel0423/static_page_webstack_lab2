<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>Media Review Website</title>
                <style>
                    table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                    }
                    td {
                    border: 2px dashed yellow;
                    padding: 8px;
                    text-align: left;
                    background-color: grey;
                    color:white;
                    }
                    th {
                    border: 2px solid black;
                    color: white;
                    background-color: red;
                    padding: 8px;
                    text-align: left;
                    }
                    h2, h1 {
                    text-align: center;
                    }
                    body{
                    background-color: lightblue;
                    }
                </style>
            </head>
            <body>
                <!-- Movies Table -->
                <h1>Media Review Website</h1>
                <h2>Movies</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Writer</th>
                        <th>Duration (min)</th>
                        <th>Language</th>
                        <th>Country</th>
                        <th>Description</th>
                    </tr>
                    <xsl:for-each select="Media/Movies/Movie">
                        <tr>
                            <td>
                                <xsl:value-of select="Title" />
                            </td>
                            <td>
                                <xsl:value-of select="ReleaseDate" />
                            </td>
                            <td>
                                <xsl:value-of select="Genre" />
                            </td>
                            <td>
                                <xsl:value-of select="Director" />
                            </td>
                            <td>
                                <xsl:value-of select="Producer" />
                            </td>
                            <td>
                                <xsl:value-of select="Writer" />
                            </td>
                            <td>
                                <xsl:value-of select="Duration" />
                            </td>
                            <td>
                                <xsl:value-of select="Language" />
                            </td>
                            <td>
                                <xsl:value-of select="Country" />
                            </td>
                            <td>
                                <xsl:value-of select="Description" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- TV Shows Table -->
                <h2>TV Shows</h2>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Genre</th>
                        <th>Creator</th>
                        <th>Network</th>
                        <th>Seasons</th>
                        <th>Episodes</th>
                        <th>Language</th>
                        <th>Country</th>
                        <th>Description</th>
                    </tr>
                    <xsl:for-each select="Media/TVShows/TVShow">
                        <tr>
                            <td>
                                <xsl:value-of select="Title" />
                            </td>
                            <td>
                                <xsl:value-of select="StartDate" />
                            </td>
                            <td>
                                <xsl:value-of select="EndDate" />
                            </td>
                            <td>
                                <xsl:value-of select="Genre" />
                            </td>
                            <td>
                                <xsl:value-of select="Creator" />
                            </td>
                            <td>
                                <xsl:value-of select="Network" />
                            </td>
                            <td>
                                <xsl:value-of select="Seasons" />
                            </td>
                            <td>
                                <xsl:value-of select="Episodes" />
                            </td>
                            <td>
                                <xsl:value-of select="Language" />
                            </td>
                            <td>
                                <xsl:value-of select="Country" />
                            </td>
                            <td>
                                <xsl:value-of select="Description" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Actors Table -->
                <h2>Actors</h2>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Nationality</th>
                        <th>Gender</th>
                        <th>Biography</th>
                        <th>Awards</th>
                        <th>Website</th>
                    </tr>
                    <xsl:for-each select="Media/Actors/Actor">
                        <tr>
                            <td>
                                <xsl:value-of select="FirstName" />
                            </td>
                            <td>
                                <xsl:value-of select="LastName" />
                            </td>
                            <td>
                                <xsl:value-of select="DateOfBirth" />
                            </td>
                            <td>
                                <xsl:value-of select="Nationality" />
                            </td>
                            <td>
                                <xsl:value-of select="Gender" />
                            </td>
                            <td>
                                <xsl:value-of select="Biography" />
                            </td>
                            <td>
                                <xsl:value-of select="Awards" />
                            </td>
                            <td>
                                <xsl:value-of select="Website" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Users Table -->
                <h2>Users</h2>
                <table>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Join Date</th>
                        <th>Bio</th>
                        <th>Socials</th>
                    </tr>
                    <xsl:for-each select="Media/Users/User">
                        <tr>
                            <td>
                                <xsl:value-of select="Username" />
                            </td>
                            <td>
                                <xsl:value-of select="Email" />
                            </td>
                            <td>
                                <xsl:value-of select="DateOfBirth" />
                            </td>
                            <td>
                                <xsl:value-of select="Gender" />
                            </td>
                            <td>
                                <xsl:value-of select="JoinDate" />
                            </td>
                            <td>
                                <xsl:value-of select="Bio" />
                            </td>
                            <td>
                                <xsl:value-of select="Socials" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>