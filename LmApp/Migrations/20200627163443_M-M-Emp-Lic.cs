using Microsoft.EntityFrameworkCore.Migrations;

namespace LmApp.Migrations
{
    public partial class MMEmpLic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LicenseEmployee",
                table: "LicenseEmployee");

            migrationBuilder.DropIndex(
                name: "IX_LicenseEmployee_EmployeeId",
                table: "LicenseEmployee");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "LicenseEmployee");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LicenseEmployee",
                table: "LicenseEmployee",
                columns: new[] { "EmployeeId", "LicenseId" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_LicenseEmployee",
                table: "LicenseEmployee");

            migrationBuilder.AddColumn<long>(
                name: "Id",
                table: "LicenseEmployee",
                type: "bigint",
                nullable: false,
                defaultValue: 0L)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_LicenseEmployee",
                table: "LicenseEmployee",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_LicenseEmployee_EmployeeId",
                table: "LicenseEmployee",
                column: "EmployeeId");
        }
    }
}
