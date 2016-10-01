/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : ryda

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-09-26 21:04:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for diqu
-- ----------------------------
DROP TABLE IF EXISTS `diqu`;
CREATE TABLE `diqu` (
  `diqu_id` varchar(55) NOT NULL,
  `diqu_name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`diqu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of diqu
-- ----------------------------
INSERT INTO `diqu` VALUES ('1', '丰台区');
INSERT INTO `diqu` VALUES ('2', '海淀区');
INSERT INTO `diqu` VALUES ('3', '朝阳区');

-- ----------------------------
-- Table structure for jiazhaoleixing
-- ----------------------------
DROP TABLE IF EXISTS `jiazhaoleixing`;
CREATE TABLE `jiazhaoleixing` (
  `jaizhaoleixing_id` varchar(55) NOT NULL,
  `jaizhaoleixing_name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`jaizhaoleixing_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jiazhaoleixing
-- ----------------------------
INSERT INTO `jiazhaoleixing` VALUES ('1', '打车');
INSERT INTO `jiazhaoleixing` VALUES ('2', '大');
INSERT INTO `jiazhaoleixing` VALUES ('3', '小车');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `role_id` varchar(55) NOT NULL,
  `role_name` varchar(55) DEFAULT NULL,
  `role_addperson` varchar(55) DEFAULT NULL,
  `role_intro` varchar(500) DEFAULT NULL,
  `role_addtime` date DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '超管1', '超管', '超管', '2016-09-14');
INSERT INTO `role` VALUES ('2', '超管2', '超管', '超管', '0000-00-00');
INSERT INTO `role` VALUES ('3', '3', '3', '3', '0000-00-00');
INSERT INTO `role` VALUES ('4', '4', '4', '4', '0000-00-00');

-- ----------------------------
-- Table structure for siji
-- ----------------------------
DROP TABLE IF EXISTS `siji`;
CREATE TABLE `siji` (
  `siji_id` varchar(55) NOT NULL,
  `sijileixig_id` varchar(55) DEFAULT NULL,
  `jaizhaoleixing_id` varchar(55) DEFAULT NULL,
  `diqu_id` varchar(55) DEFAULT NULL,
  `siji_shoujihao` varchar(55) DEFAULT NULL,
  `siji_suoshudiqu` varchar(55) DEFAULT NULL,
  `siji_chushengriqi` date DEFAULT NULL,
  `siji_xingming` varchar(55) DEFAULT NULL,
  `siji_jialing` varchar(55) DEFAULT NULL,
  `siji_nianling` varchar(55) DEFAULT NULL,
  `dejipingding_id` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`siji_id`),
  KEY `FK_Reference_4` (`sijileixig_id`),
  KEY `FK_Reference_5` (`jaizhaoleixing_id`),
  KEY `FK_Reference_6` (`diqu_id`),
  KEY `FK_Reference_7` (`dejipingding_id`),
  CONSTRAINT `FK_Reference_4` FOREIGN KEY (`sijileixig_id`) REFERENCES `sijileixing` (`sijileixig_id`),
  CONSTRAINT `FK_Reference_5` FOREIGN KEY (`jaizhaoleixing_id`) REFERENCES `jiazhaoleixing` (`jaizhaoleixing_id`),
  CONSTRAINT `FK_Reference_6` FOREIGN KEY (`diqu_id`) REFERENCES `diqu` (`diqu_id`),
  CONSTRAINT `FK_Reference_7` FOREIGN KEY (`dejipingding_id`) REFERENCES `siji_dengjipingding` (`siji_dengjiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of siji
-- ----------------------------
INSERT INTO `siji` VALUES ('1', '1', '1', '1', '13888888888', '丰台区', '2016-09-28', '张一', '16', '46', '1');
INSERT INTO `siji` VALUES ('2', '2', '2', '3', '13987485722', '海淀区', '2016-09-13', '张二', '4', '27', '3');
INSERT INTO `siji` VALUES ('cec83ffd-b239-44be-b4ba-aa6d52137d2b', '1', '1', '2', '1891891899', null, '2016-09-21', '小王', '4', '35', '2');
INSERT INTO `siji` VALUES ('fdf4b723-c241-47ad-9882-c56f990afb78', '3', '1', '1', '111000111', null, '2016-09-09', '小赵', '5', '35', '2');

-- ----------------------------
-- Table structure for sijijianli
-- ----------------------------
DROP TABLE IF EXISTS `sijijianli`;
CREATE TABLE `sijijianli` (
  `sijijianli_id` varchar(55) NOT NULL,
  `jaizhaoleixing_id` varchar(55) DEFAULT NULL,
  `siji_xingbie` varchar(55) DEFAULT NULL,
  `siji_shoujihao` varchar(55) DEFAULT NULL,
  `siji_addtime` date DEFAULT NULL,
  `siji_suoshudiqu` varchar(55) DEFAULT NULL,
  `siji_chushengriqi` date DEFAULT NULL,
  `siji_xingming` varchar(55) DEFAULT NULL,
  `siji_jialing` varchar(55) DEFAULT NULL,
  `siji_nianling` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`sijijianli_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sijijianli
-- ----------------------------
INSERT INTO `sijijianli` VALUES ('1', null, null, 'sb250', null, '朝阳', '2016-09-20', '往', '-0.2', '10');
INSERT INTO `sijijianli` VALUES ('2', null, null, '13844629865', null, '大兴区', '2016-09-07', '奥巴马', '20', '20');
INSERT INTO `sijijianli` VALUES ('26fc5bd8-7374-4818-bec8-15fdd872c93e', null, null, '18745890000', null, '丰台', '2016-09-20', '我', '12', '12');
INSERT INTO `sijijianli` VALUES ('3', '3', '3', '333XXX', '2016-08-29', '朝阳', '2016-09-28', '张三', '30', '30');

-- ----------------------------
-- Table structure for sijileixing
-- ----------------------------
DROP TABLE IF EXISTS `sijileixing`;
CREATE TABLE `sijileixing` (
  `sijileixig_id` varchar(55) NOT NULL,
  `leixing_name` varchar(55) DEFAULT NULL,
  `diqu_name` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`sijileixig_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sijileixing
-- ----------------------------
INSERT INTO `sijileixing` VALUES ('1', '全职', '朝阳');
INSERT INTO `sijileixing` VALUES ('2', '兼职', '海淀');
INSERT INTO `sijileixing` VALUES ('3', '专车', '丰台');

-- ----------------------------
-- Table structure for siji_dengjipingding
-- ----------------------------
DROP TABLE IF EXISTS `siji_dengjipingding`;
CREATE TABLE `siji_dengjipingding` (
  `siji_dengjiid` varchar(255) NOT NULL,
  `dengji` varchar(255) NOT NULL,
  PRIMARY KEY (`siji_dengjiid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of siji_dengjipingding
-- ----------------------------
INSERT INTO `siji_dengjipingding` VALUES ('1', '好');
INSERT INTO `siji_dengjipingding` VALUES ('2', '很好');
INSERT INTO `siji_dengjipingding` VALUES ('3', '非常好');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` varchar(55) NOT NULL,
  `user_account` varchar(55) DEFAULT NULL,
  `user_password` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin');
INSERT INTO `user` VALUES ('2', 'admin1', 'admin1');
INSERT INTO `user` VALUES ('3', 'admin2', 'admin2');

-- ----------------------------
-- Table structure for userrole
-- ----------------------------
DROP TABLE IF EXISTS `userrole`;
CREATE TABLE `userrole` (
  `accountrole_id` varchar(55) NOT NULL,
  `role_id` varchar(55) DEFAULT NULL,
  `user_id` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`accountrole_id`),
  KEY `FK_Reference_1` (`user_id`),
  KEY `FK_Reference_2` (`role_id`),
  CONSTRAINT `FK_Reference_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FK_Reference_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userrole
-- ----------------------------
INSERT INTO `userrole` VALUES ('1', '1', '1');
INSERT INTO `userrole` VALUES ('2', '2', '2');
INSERT INTO `userrole` VALUES ('3', '3', '3');

-- ----------------------------
-- View structure for sijijianliview
-- ----------------------------
DROP VIEW IF EXISTS `sijijianliview`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER  VIEW `sijijianliview` AS SELECT
siji.siji_id,
siji.siji_shoujihao,
siji.siji_chushengriqi,
siji.siji_xingming,
siji.siji_jialing,
siji.siji_nianling,
jiazhaoleixing.jaizhaoleixing_name,
sijileixing.leixing_name,
diqu.diqu_name,
siji_dengjipingding.dengji,
siji.sijileixig_id,
siji.jaizhaoleixing_id,
siji.diqu_id,
siji.dejipingding_id
FROM
siji
INNER JOIN jiazhaoleixing ON siji.jaizhaoleixing_id = jiazhaoleixing.jaizhaoleixing_id
INNER JOIN sijileixing ON siji.sijileixig_id = sijileixing.sijileixig_id
INNER JOIN diqu ON siji.diqu_id = diqu.diqu_id
INNER JOIN siji_dengjipingding ON siji.dejipingding_id = siji_dengjipingding.siji_dengjiid ;
