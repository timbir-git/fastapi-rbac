-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        10.11.2-MariaDB - mariadb.org binary distribution
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- 导出 mini 的数据库结构
CREATE DATABASE IF NOT EXISTS `mini` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `mini`;

-- 导出  表 mini.sys_menu 结构
CREATE TABLE IF NOT EXISTS `sys_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `name` varchar(20) DEFAULT NULL COMMENT '名称',
  `icon` varchar(100) DEFAULT NULL COMMENT '菜单图标',
  `path` varchar(128) DEFAULT NULL COMMENT '菜单url',
  `type` smallint(6) NOT NULL COMMENT '菜单类型 0目录 1组件 2按钮 3数据',
  `component` varchar(128) DEFAULT NULL COMMENT '组件地址',
  `pid` int(11) DEFAULT NULL COMMENT '父id',
  `identifier` varchar(30) DEFAULT NULL COMMENT '权限标识 user:add',
  `api` varchar(128) DEFAULT NULL COMMENT '接口地址',
  `method` varchar(10) DEFAULT NULL COMMENT '接口请求方式',
  PRIMARY KEY (`id`),
  KEY `idx_sys_menu_type_a01aeb` (`type`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='菜单表';

-- 正在导出表  mini.sys_menu 的数据：~30 rows (大约)
/*!40000 ALTER TABLE `sys_menu` DISABLE KEYS */;
INSERT INTO `sys_menu` (`id`, `status`, `created`, `modified`, `name`, `icon`, `path`, `type`, `component`, `pid`, `identifier`, `api`, `method`) VALUES
	(1, 1, '2022-10-04 10:23:49.227103', '2022-10-04 10:23:49.227113', '系统面板', 'DashboardOutlined', '/dashboard', 0, NULL, 0, NULL, NULL, NULL),
	(2, 1, '2022-10-04 10:23:49.231260', '2022-10-04 10:23:49.231267', '系统管理', 'AppstoreOutlined', '/system', 0, NULL, 0, NULL, NULL, NULL),
	(3, 1, '2022-10-04 10:23:49.234848', '2022-10-04 10:23:49.234859', '用户管理', 'TeamOutlined', '/system/user', 1, '/system/user/user.vue', 2, NULL, NULL, NULL),
	(4, 1, '2022-10-04 10:23:49.239058', '2022-10-04 10:23:49.239069', '角色管理', 'UserOutlined', '/system/role', 1, '/system/role/role.vue', 2, NULL, NULL, NULL),
	(5, 1, '2022-10-04 10:23:49.242859', '2022-10-04 10:23:49.242868', '菜单管理', 'MenuOutlined', '/system/menu', 1, '/system/menu/menu.vue', 2, NULL, NULL, NULL),
	(6, 1, '2022-10-04 10:23:49.246288', '2022-10-04 10:23:49.246297', '数据面板', 'AreaChartOutlined', '/dashboard/index', 1, '/dashboard/index/index.vue', 1, NULL, NULL, NULL),
	(7, 1, '2022-10-04 10:23:49.249998', '2022-10-04 10:23:49.250006', '用户详情', NULL, NULL, 3, NULL, 3, 'user:get', '/user/{pk}', 'GET'),
	(8, 1, '2022-10-04 10:23:49.252976', '2022-10-04 10:23:49.252983', '用户列表', NULL, NULL, 3, NULL, 3, NULL, '/user', 'GET'),
	(9, 1, '2022-10-04 10:23:49.256606', '2022-10-04 10:23:49.256615', '用户查询', NULL, NULL, 2, NULL, 3, 'user:query', '/user/query', 'POST'),
	(10, 1, '2022-10-04 10:23:49.260460', '2022-10-04 10:23:49.260467', '用户新增', NULL, NULL, 2, NULL, 3, 'user:create', '/user', 'POST'),
	(11, 1, '2022-10-04 10:23:49.263770', '2022-10-04 10:23:49.263780', '用户删除', NULL, NULL, 2, NULL, 3, 'user:delete', '/user/{pk}', 'DELETE'),
	(12, 1, '2022-10-04 10:23:49.267737', '2022-10-04 10:23:49.267746', '用户更新', NULL, NULL, 2, NULL, 3, 'user:update', '/user/{pk}', 'PUT'),
	(13, 1, '2022-10-04 10:23:49.272090', '2022-10-04 10:23:49.272100', '查询角色拥有权限', NULL, NULL, 3, NULL, 4, NULL, '/role/{rid}/menu', 'GET'),
	(14, 1, '2022-10-04 10:23:49.276745', '2022-10-04 10:23:49.276755', '角色列表', NULL, NULL, 3, NULL, 4, NULL, '/role', 'GET'),
	(15, 1, '2022-10-04 10:23:49.280997', '2022-10-04 10:23:49.281006', '角色查询', NULL, NULL, 2, NULL, 4, 'role:query', '/role/query', 'POST'),
	(16, 1, '2022-10-04 10:23:49.284933', '2022-10-04 10:23:49.284943', '角色新增', NULL, NULL, 2, NULL, 4, 'role:create', '/role', 'POST'),
	(17, 1, '2022-10-04 10:23:49.290230', '2022-10-04 10:23:49.290241', '角色删除', NULL, NULL, 2, NULL, 4, 'role:delete', '/role/{pk}', 'DELETE'),
	(18, 1, '2022-10-04 10:23:49.294938', '2022-10-04 10:23:49.294948', '角色更新', NULL, NULL, 2, NULL, 4, 'role:update', '/role/{pk}', 'PUT'),
	(19, 1, '2022-10-04 10:23:49.298833', '2022-10-04 10:23:49.298842', '菜单列表', NULL, NULL, 3, NULL, 5, NULL, '/menu', 'GET'),
	(20, 1, '2022-10-04 10:23:49.303029', '2022-10-04 10:23:49.303038', '菜单新增', NULL, NULL, 2, NULL, 5, 'menu:create', '/menu', 'POST'),
	(21, 1, '2022-10-04 10:23:49.307568', '2022-10-04 10:23:49.307578', '菜单更新', NULL, NULL, 2, NULL, 5, 'menu:update', '/menu/{pk}', 'PUT'),
	(22, 1, '2022-10-04 10:23:49.311312', '2022-10-04 10:23:49.311319', '菜单删除', NULL, NULL, 2, NULL, 5, 'menu:delete', '/menu/{pk}', 'DELETE'),
	(23, 1, '2023-05-16 12:09:21.993929', '2023-05-19 17:59:59.829892', '工具管理', 'ContainerOutlined', '/tool', 0, '', 0, NULL, NULL, NULL),
	(24, 1, '2023-05-17 06:27:39.117952', '2023-05-26 14:46:43.176061', '证书管理', 'ContainerOutlined', '/certificate', 1, '/tool/certificate/certificate.vue', 23, NULL, NULL, NULL),
	(26, 1, '2023-05-19 10:02:10.855205', '2023-06-06 06:29:50.766445', '证书列表', NULL, '/certificate', 2, '', 24, 'certificate:get', '/certificate', 'GET'),
	(27, 1, '2023-05-23 08:47:32.455140', '2023-06-06 06:29:55.579574', '新增域名', NULL, '/certificate', 2, NULL, 24, 'certificate:create', '/certificate', 'POST'),
	(28, 1, '2023-05-24 12:03:54.988237', '2023-06-06 06:30:03.026406', '删除域名', NULL, '/certificate', 2, NULL, 24, 'certificate:delete', '/certificate/{pk}', 'DELETE'),
	(29, 1, '2023-05-25 10:26:28.027996', '2023-06-06 06:30:07.261139', '更新域名', NULL, '/certificate', 2, NULL, 24, 'certificate:update', '/certificate/{pk}', 'PUT'),
	(30, 1, '2023-06-06 06:32:32.988156', '2023-06-06 06:32:32.988156', '检测证书', NULL, '/certificate', 2, NULL, 24, 'certificate:check', '/certificate/check', 'GET'),
	(31, 1, '2023-06-07 10:41:11.814094', '2023-06-07 18:41:34.547815', '查询域名', NULL, '/certificate', 3, NULL, 24, 'certificate:query', '/certificate/query', 'POST');
/*!40000 ALTER TABLE `sys_menu` ENABLE KEYS */;

-- 导出  表 mini.sys_role 结构
CREATE TABLE IF NOT EXISTS `sys_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `name` varchar(20) NOT NULL COMMENT '角色名称',
  `remark` varchar(200) NOT NULL COMMENT '角色描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='角色表';

-- 正在导出表  mini.sys_role 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `sys_role` DISABLE KEYS */;
INSERT INTO `sys_role` (`id`, `status`, `created`, `modified`, `name`, `remark`) VALUES
	(1, 1, '2022-10-04 10:23:49.320789', '2023-05-16 20:11:11.110096', '超级管理员', '全部权限'),
	(2, 1, '2022-10-04 10:48:51.632860', '2023-06-20 17:55:21.925892', '普通用户组', 'users');
/*!40000 ALTER TABLE `sys_role` ENABLE KEYS */;

-- 导出  表 mini.sys_role_menu 结构
CREATE TABLE IF NOT EXISTS `sys_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `rid` int(11) NOT NULL COMMENT '角色id',
  `mid` int(11) NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`id`),
  KEY `idx_sys_role_me_mid_c77f67` (`mid`,`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=547 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='角色菜单(权限)关系表';

-- 正在导出表  mini.sys_role_menu 的数据：~34 rows (大约)
/*!40000 ALTER TABLE `sys_role_menu` DISABLE KEYS */;
INSERT INTO `sys_role_menu` (`id`, `status`, `created`, `modified`, `rid`, `mid`) VALUES
	(513, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 6),
	(514, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 7),
	(515, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 8),
	(516, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 9),
	(517, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 10),
	(518, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 11),
	(519, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 12),
	(520, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 13),
	(521, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.601718', 1, 14),
	(522, 1, '2023-06-07 10:41:43.601718', '2023-06-07 10:41:43.602940', 1, 15),
	(523, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 16),
	(524, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 17),
	(525, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 18),
	(526, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 19),
	(527, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 20),
	(528, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 21),
	(529, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 22),
	(530, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 26),
	(531, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 27),
	(532, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 28),
	(533, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 29),
	(534, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 30),
	(535, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 3),
	(536, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 4),
	(537, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 5),
	(538, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 2),
	(539, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 1),
	(540, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 31),
	(541, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 24),
	(542, 1, '2023-06-07 10:41:43.602940', '2023-06-07 10:41:43.602940', 1, 23),
	(543, 1, '2023-06-20 09:43:25.276424', '2023-06-20 09:43:25.276424', 2, 24),
	(544, 1, '2023-06-20 09:43:25.276424', '2023-06-20 09:43:25.276424', 2, 23),
	(545, 1, '2023-06-20 09:43:25.276424', '2023-06-20 09:43:25.276424', 2, 26),
	(546, 1, '2023-06-20 09:43:25.276424', '2023-06-20 09:43:25.276424', 2, 31);
/*!40000 ALTER TABLE `sys_role_menu` ENABLE KEYS */;

-- 导出  表 mini.sys_user 结构
CREATE TABLE IF NOT EXISTS `sys_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `username` varchar(16) NOT NULL COMMENT '账号',
  `nickname` varchar(20) DEFAULT NULL COMMENT '姓名',
  `password` varchar(128) NOT NULL COMMENT '密码',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uid_sys_user_usernam_29caba` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='用户表';

-- 正在导出表  mini.sys_user 的数据：~2 rows (大约)
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
INSERT INTO `sys_user` (`id`, `status`, `created`, `modified`, `username`, `nickname`, `password`) VALUES
	(1, 1, '2022-10-04 10:23:49.596766', '2023-06-20 17:56:53.226402', 'admin', '平平无奇的管理员', '$2b$12$prEQ6ahnaxRk1M1aISECYefzDJeivejx6I3xeI.nztUj51lvdmv8S'),
	(2, 1, '2023-05-16 06:28:44.303858', '2023-06-20 17:55:37.356866', 'test', '测试用户', '$2b$12$V96ant.U00m1OcEWXVOY9e1WbD7RuqGPhJIzOKS8GSPeW4hiw./S6');
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;

-- 导出  表 mini.sys_user_role 结构
CREATE TABLE IF NOT EXISTS `sys_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `rid` int(11) NOT NULL COMMENT '角色id',
  `uid` int(11) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`),
  KEY `idx_sys_user_ro_uid_7e61e1` (`uid`,`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='用户角色关系表';

-- 正在导出表  mini.sys_user_role 的数据：~4 rows (大约)
/*!40000 ALTER TABLE `sys_user_role` DISABLE KEYS */;
INSERT INTO `sys_user_role` (`id`, `status`, `created`, `modified`, `rid`, `uid`) VALUES
	(2, 9, '2022-10-04 10:49:02.820542', '2023-06-20 17:56:53.238588', 1, 1),
	(3, 5, '2023-06-20 09:50:34.579094', '2023-06-20 09:50:34.579094', 2, 2),
	(4, 5, '2023-06-20 09:56:53.239581', '2023-06-20 17:57:14.388030', 1, 1),
	(5, 1, '2023-06-20 09:56:53.239581', '2023-06-20 09:57:14.377010', 2, 1);
/*!40000 ALTER TABLE `sys_user_role` ENABLE KEYS */;

-- 导出  表 mini.tool_certificate 结构
CREATE TABLE IF NOT EXISTS `tool_certificate` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `status` smallint(6) NOT NULL DEFAULT 1 COMMENT '状态 1有效 9 删除 5选中',
  `created` datetime(6) DEFAULT current_timestamp(6) COMMENT '创建时间',
  `modified` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6) COMMENT '更新时间',
  `domain` varchar(128) NOT NULL COMMENT '域名',
  `duration` int(11) DEFAULT NULL COMMENT '有效期',
  `watch` tinyint(1) NOT NULL COMMENT '是否检测',
  `remain` int(11) DEFAULT NULL COMMENT '剩余期限',
  `remark` varchar(256) NOT NULL COMMENT '备注',
  PRIMARY KEY (`id`),
  UNIQUE KEY `domain` (`domain`),
  UNIQUE KEY `uid_tool_certif_domain_d7c158` (`domain`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='证书表';

-- 正在导出表  mini.tool_certificate 的数据：~0 rows (大约)
/*!40000 ALTER TABLE `tool_certificate` DISABLE KEYS */;
/*!40000 ALTER TABLE `tool_certificate` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
